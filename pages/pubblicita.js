import React from 'react'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header/Header'
import PubblicitaContent from '../components/Pubblicita/Pubblicita'
import Footer from '../components/Footer/Footer'

class Pubblicita extends React.Component {

  static async getInitialProps(ctx) {
    // Gets librerie page content from Wordpress backend
    const wooUser = "ck_b16c75b78dd550537bb2b1f0645d08f5b0bd4067"
    const wooKey = process.env.WOOCOMMERCE_SECRET_KEY
    // console.log("DEBUG [] [] -> ", process.env.WOOCOMMERCE_SECRET_KEY);
    const wooApiUrl = `https://${wooUser}:${wooKey}@novacharta.it/wp-json/wp/v2`
    const res = await fetch(`${wooApiUrl}/pages/6499`)

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
        <div className="mainContainer">
          <Header />
          <PubblicitaContent contenutoPagina={contenutoPagina} />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Pubblicita
