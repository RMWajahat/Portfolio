import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wajahat | FullStack Developer',
  description: 'Wajahat is a Full stack web site developer and a data scientist who create ai based apps using gpts and custom models.',
  generator: 'Wajahat Hussain',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
