import "./styles/global.css"
export const metadata = {
  title: 'Mtusi sport',
  description: 'In love with sport',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  )
}
