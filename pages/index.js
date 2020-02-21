import React from 'react'
// import fetch from 'isomorphic-unfetch'
import Header from '../components/Header/Header'
import InEvidenza from '../components/InEvidenza/InEvidenza'
import QuattroSezioni from '../components/QuattroSezioni/QuattroSezioni'
import RaccolteFondi from '../components/RaccolteFondi/RaccolteFondi'
import StoriaCasa from '../components/StoriaCasa/StoriaCasa'
import Footer from '../components/Footer/Footer'

class HomePage extends React.Component {
  static async getInitialProps(ctx) {
    // Gets InEvidenza products from WooCommerce backend
    const wooApiUrl = "https://novacharta.it/wp-json/wc/v3/"
    const wooUser = "ck_b16c75b78dd550537bb2b1f0645d08f5b0bd4067"
    // const testino = process.env.WOOCOMMERCE_SECRET_KEY
    console.log("WASAAAA MAAAAAN", process.env);
    // const res = await fetch('https://api.github.com/repos/zeit/next.js')
    // const json = await res.json()
    return { test: "yesss" }
  }

  render() {
    // const testino = process.env.WOOCOMMERCE_SECRET_KEY

    console.log("WASAAAA MAAAAAN23432342342342342", process.env.WOOCOMMERCE_SECRET_KEY);

    return (
      <div className="mainContainer">
        <Header />
        <InEvidenza />
        <QuattroSezioni />
        <RaccolteFondi />
        <StoriaCasa />
        <Footer />
      </div>
  )
  }
}

export default HomePage
