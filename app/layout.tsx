import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  title: 'CraftEdge | Crimson Fermentation',
  description: 'Experience the heritage of craft brewing with CraftEdge. Discover our Crimson Fermentation collection, brewed with passion since 1984.',
  keywords: 'craft beer, brewery, artisan brewing, fermentation, heritage brewing',
  authors: [{ name: 'CraftEdge' }],
  openGraph: {
    title: 'CraftEdge | Crimson Fermentation',
    description: 'Experience the heritage of craft brewing with CraftEdge',
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