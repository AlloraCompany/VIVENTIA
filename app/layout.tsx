import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const ethos = localFont({
  src: [
    { path: '../fonts/EthosNova-Light.ttf', weight: '300', style: 'normal' },
    { path: '../fonts/EthosNova-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/EthosNova-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../fonts/EthosNova-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/EthosNova-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-ethos',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Viventia | Clínica de Psiquiatria Premium',
  description: 'Viventia - Mais do que tratar sintomas, proporcionar vida plena. Clínica de psiquiatria premium com atendimento humanizado e experiência acolhedora.',
  keywords: ['psiquiatria', 'saúde mental', 'clínica premium', 'bem-estar', 'vida plena', 'tratamento humanizado'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${ethos.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
