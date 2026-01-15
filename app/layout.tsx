import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: 'Benedikt Kudryavtsev - Data Engineer | Analytics Engineer',
  description: 'Data Engineer specializing in enterprise data platforms. 107 dbt models, 4 countries, BigQuery & Cloud architecture. Building data infrastructure that scales.',
  keywords: ['Data Engineer', 'Analytics Engineer', 'dbt', 'BigQuery', 'GCP', 'Data Platform', 'ETL', 'Chile'],
  authors: [{ name: 'Benedikt Kudryavtsev' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Benedikt Kudryavtsev - Data Engineer',
    description: 'Enterprise Data Platform Architect | 107 dbt models | 4 countries | BigQuery & Cloud',
    siteName: 'Benedikt Kudryavtsev Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benedikt Kudryavtsev - Data Engineer',
    description: 'Enterprise Data Platform Architect | 107 dbt models | 4 countries',
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
