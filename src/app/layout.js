import { Roboto } from 'next/font/google'
import Header from './components/Header/Header'
import './globals.css'

const FontBody = Roboto({
  subsets: ['latin'],
  weight: ['400', '300', '400', '700', '900']
})

export const metadata = {
  title: 'Погодка',
  description: 'Прогноз от Артура'
}

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={FontBody.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
