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
  // const store = makeStore();
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
