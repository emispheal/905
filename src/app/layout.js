import { Inter } from 'next/font/google'
import './globals.css'

import PocketBase from 'pocketbase';


const pb = new PocketBase('http://127.0.0.1:8090')

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'fk',
  description: 'n',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
