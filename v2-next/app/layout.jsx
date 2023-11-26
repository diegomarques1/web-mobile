export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  icons: {
    icon: 'icon.png'
  },
  title: 'MackCarona',
  description: 'Uma aplicação React para viabilizar caronas entre membros da comunidade do Mackenzie. Gerado por create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
