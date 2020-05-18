import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header/Header'
import CorsiContent from '../components/Corsi/Corsi'
import Footer from '../components/Footer/Footer'

class Corsi extends React.Component {

  static async getInitialProps(ctx) {
    // Gets librerie page content from Wordpress backend
    const wooUser = "ck_b16c75b78dd550537bb2b1f0645d08f5b0bd4067"
    const wooKey = process.env.WOOCOMMERCE_SECRET_KEY
    // console.log("DEBUG [] [] -> ", process.env.WOOCOMMERCE_SECRET_KEY);
    const wooApiUrl = `https://${wooUser}:${wooKey}@negozio.novacharta.it/wp-json/wp/v2`
    const res = await fetch(`${wooApiUrl}/pages/3351`)

    if (res.status !== 200) {
      return {contenutoPagina: {error: 'WP-JSON API ha ritornato un errore, contattare il supporto tecnico'} }
    }

    const json = await res.json()
    return { contenutoPagina: json }
  }

  render() {
    const { contenutoPagina } = this.props

    return (
      <div className="globalContainer">
        <Head>
          <title>Nova Charta Editori</title>
        </Head>
        <div className="mainContainer">
          <Header />
          <CorsiContent contenutoPagina={contenutoPagina} />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Corsi
