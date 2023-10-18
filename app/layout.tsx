import { Urbanist } from 'next/font/google'

import type { Metadata } from 'next'
import Navbar from '@/components/ui/navbar/navbar'
import Footer from '@/components/footer'

import './globals.css'
import ModalProvider from '@/provider/modal-provider'


const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />

      </body>

    </html>
  )
}
