import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: 'Benedikt Kudryavtsev - Full Stack Data Engineer',
  description: 'Data Engineer | Analytics | Full Stack Developer',
  keywords: ['Data Engineer', 'Analytics Engineer', 'Full Stack', 'dbt', 'BigQuery', 'GCP', 'Next.js', 'React', 'Chile'],
  authors: [{ name: 'Benedikt Kudryavtsev' }],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    title: 'Benedikt Kudryavtsev - Full Stack Data Engineer',
    description: 'Data Engineer | Analytics | Full Stack Developer',
    siteName: 'Benedikt Kudryavtsev Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benedikt Kudryavtsev - Full Stack Data Engineer',
    description: 'Data Engineer | Analytics | Full Stack Developer',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        <Providers>
          {children}
          <Toaster
            position="top-right"
            richColors
            theme="dark"
            toastOptions={{
              style: {
                background: 'rgba(39, 39, 42, 0.95)',
                border: '1px solid rgba(63, 63, 70, 0.5)',
                color: 'white',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
