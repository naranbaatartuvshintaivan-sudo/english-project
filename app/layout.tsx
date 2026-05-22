import type { Metadata } from 'next'
import { McLaren, Lora, DM_Sans } from 'next/font/google'
import './globals.css'

const mclaren = McLaren({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mclaren',
})

const lora = Lora({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-lora',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Гулливерийн Аялал',
  description: 'Жонатан Свифтийн сонгодог бүтээлийн монгол орчуулга · 10-р ангийн сурагчийн төсөл',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mn" className="h-full">
      <body
        className={`${mclaren.variable} ${lora.variable} ${dmSans.variable} min-h-full antialiased bg-cream`}
      >
        {children}
      </body>
    </html>
  )
}
