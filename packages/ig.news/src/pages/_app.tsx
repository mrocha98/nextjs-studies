import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/main.scss'
import { Header } from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
