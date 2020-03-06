import React from 'react'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header/Header'
import LibrerieAff from '../components/Librerie/Librerie'
import Footer from '../components/Footer/Footer'

class Librerie extends React.Component {

  static async getInitialProps(ctx) {
    // Gets librerie page content from Wordpress backend
    const wooUser = "ck_b16c75b78dd550537bb2b1f0645d08f5b0bd4067"
    const wooKey = process.env.WOOCOMMERCE_SECRET_KEY
    // console.log("DEBUG [] [] -> ", process.env.WOOCOMMERCE_SECRET_KEY);
    const wooApiUrl = `https://${wooUser}:${wooKey}@novacharta.it/wp-json/wp/v2`
    const res = await fetch(`${wooApiUrl}/pages/3324`)
    const json = await res.json()
    return { contenutoPagina: json }
  }

  render() {
    const { contenutoPagina } = this.props

    return (
      <div className="mainContainer">
        <Header />
        <h1 style={{marginTop: 100}}>Pagina in costruzione</h1>
        <Footer />
      </div>
  )
  }
}

export default Librerie
