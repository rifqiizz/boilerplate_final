import { Inter as FontSans } from 'next/font/google'
import '@/styles/globals.css'
import { Provider } from '@/components/provider'

const fontSans = FontSans({ subsets: ['latin'] })

export const metadata = {
  title: 'Final Bytehub',
  description: 'Batch3 - DevScale Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontSans.className}><Provider>{children}</Provider></body>
    </html>
  )
}
