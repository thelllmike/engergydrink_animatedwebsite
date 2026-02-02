import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  title: 'Clever Project | Energy Drink',
  description: 'Experience the power of innovation with Clever Project. Discover our premium energy drink collection, crafted with passion.',
  keywords: 'energy drink, premium beverage, innovation, clever project',
  authors: [{ name: 'Clever Project' }],
  openGraph: {
    title: 'Clever Project | Energy Drink',
    description: 'Experience the power of innovation with Clever Project',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body id="smooth-wrapper">
        {children}
      </body>
    </html>
  )
}