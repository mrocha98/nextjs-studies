import Head from 'next/head'

import styles from '../styles/pages/home.module.scss'
import { SubscribeButton } from '../components/subscribe-button'

function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.greetings}>
            <span role="img" aria-label="clapping hands">
              👏
            </span>{' '}
            Hey, welcome!
          </p>

          <h1 className={styles.title}>
            News about the <span>React</span> world.
          </h1>

          <p className={styles['pricing-text']}>
            Get access to all the publications <br />
            <span>for $9.90 per month</span>
          </p>

          <SubscribeButton className={styles['subscribe-button']} />
        </section>

        <img
          src="/images/avatar.svg"
          alt="girl working on a laptop with a React logo sticker on the cover."
        />
      </main>
    </>
  )
}

export default Home
