import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 3 // 3 requests per minute

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name too short').max(100, 'Name too long'),
  email: z.string().email('Invalid email'),
  subject: z.string().min(3, 'Subject too short').max(200, 'Subject too long'),
  message: z.string().min(10, 'Message too short').max(5000, 'Message too long'),
})

// Rate limiting function
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimitStore.get(ip) || []

  // Filter out old timestamps
  const recentTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW)

  if (recentTimestamps.length >= RATE_LIMIT_MAX) {
    return true
  }

  recentTimestamps.push(now)
  rateLimitStore.set(ip, recentTimestamps)
  return false
}

// Send Telegram notification
async function sendTelegramNotification(data: {
  name: string
  email: string
  subject: string
  message: string
}): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.warn('Telegram credentials not configured')
    return false
  }

  const text = `📬 *New Contact Form Message*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📋 *Subject:* ${data.subject}

💬 *Message:*
${data.message}`

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown',
        }),
      }
    )

    return response.ok
  } catch (error) {
    console.error('Telegram notification failed:', error)
    return false
  }
}

// Send email via Resend
async function sendEmail(data: {
  name: string
  email: string
  subject: string
  message: string
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL || 'benedikt@uc.cl'

  if (!apiKey) {
    console.warn('Resend API key not configured')
    return false
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [contactEmail],
      replyTo: data.email,
      subject: `[Portfolio] ${data.subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">New Contact Form Message</h2>

          <div style="background: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Subject:</strong> ${data.subject}</p>
          </div>

          <div style="background: #fafafa; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>

          <p style="color: #71717a; font-size: 12px; margin-top: 30px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Email send error:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Email failed:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown'

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validationResult = contactSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validationResult.error.flatten().fieldErrors
        },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Send notifications in parallel
    const [telegramSuccess, emailSuccess] = await Promise.all([
      sendTelegramNotification(data),
      sendEmail(data),
    ])

    // At least one notification method should succeed
    if (!telegramSuccess && !emailSuccess) {
      return NextResponse.json(
        { success: false, message: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
      channels: {
        telegram: telegramSuccess,
        email: emailSuccess,
      },
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
