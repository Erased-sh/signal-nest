import Navbar from "./components/navbar"

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
      <body>{children}</body>
    </html>
  )
}
