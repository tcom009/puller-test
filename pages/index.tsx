import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import config from 'config'
import ProductList from 'elements/ProductList'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{config.PROJECT}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <ProductList/>
      </div>
  )
}

export default Home
