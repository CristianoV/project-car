import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import Header from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
