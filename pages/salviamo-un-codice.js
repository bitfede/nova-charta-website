import React from 'react'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header/Header'
import SalviamoCodiceContent from '../components/SalviamoCodice/SalviamoCodice'
import Footer from '../components/Footer/Footer'

class SalviamoUnCodice extends React.Component {

  static async getInitialProps(ctx) {
    // Gets librerie page content from Wordpress backend
    const wooUser = "ck_b16c75b78dd550537bb2b1f0645d08f5b0bd4067"
    const wooKey = process.env.WOOCOMMERCE_SECRET_KEY
    // console.log("DEBUG [] [] -> ", process.env.WOOCOMMERCE_SECRET_KEY);
    const wooApiUrl = `https://${wooUser}:${wooKey}@novacharta.it/wp-json/wp/v2`
    const res = await fetch(`${wooApiUrl}/pages/5029`)
    const json = await res.json()
    return { contenutoPagina: json }
  }

  render() {
    const { contenutoPagina } = this.props

    return (
      <div className="mainContainer">
        <Header />
        <SalviamoCodiceContent contenutoPagina={contenutoPagina} />
        <Footer />
      </div>
    )
  }
}

export default SalviamoUnCodice
