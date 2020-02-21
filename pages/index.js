import React from 'react'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header/Header'
import InEvidenza from '../components/InEvidenza/InEvidenza'
import QuattroSezioni from '../components/QuattroSezioni/QuattroSezioni'
import RaccolteFondi from '../components/RaccolteFondi/RaccolteFondi'
import StoriaCasa from '../components/StoriaCasa/StoriaCasa'
import Footer from '../components/Footer/Footer'

class HomePage extends React.Component {
  static async getInitialProps(ctx) {
    // Gets InEvidenza products from WooCommerce backend
    const wooUser = "ck_b16c75b78dd550537bb2b1f0645d08f5b0bd4067"
    const wooKey = process.env.WOOCOMMERCE_SECRET_KEY
    const wooApiUrl = `https://${wooUser}:${wooKey}@novacharta.it/wp-json/wc/v3`
    const res = await fetch(`${wooApiUrl}/products?category=90`)
    const json = await res.json()
    return { inEvidenza: json }
  }

  render() {

    return (
      <div className="mainContainer">
        <Header />
        <InEvidenza data={this.props.inEvidenza} />
        <QuattroSezioni />
        <RaccolteFondi />
        <StoriaCasa />
        <Footer />
      </div>
  )
  }
}

export default HomePage
