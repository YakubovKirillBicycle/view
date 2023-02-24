import './style/globals.css'

export const metadata = {
  title: 'View gallery app',
  description: 'View gallery app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
