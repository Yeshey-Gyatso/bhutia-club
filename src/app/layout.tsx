import './globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { appWithTranslation } from 'next-i18next'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bhutia khayrab yargay tshogpo.',
  description: 'Bhutia Website',
}

const RootLayout: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Component {...pageProps} />
      </body>
    </html>
  )
}

export default appWithTranslation(RootLayout)
