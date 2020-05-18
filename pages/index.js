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
    const rootDomain = "negozio.novacharta.it"
    const wooUser = "ck_b16c75b78dd550537bb2b1f0645d08f5b0bd4067"
    const wooKey = process.env.WOOCOMMERCE_SECRET_KEY
    // console.log("DEBUG [] [] -> ", process.env.WOOCOMMERCE_SECRET_KEY);
    const wooApiUrl = `http://${wooUser}:${wooKey}@${rootDomain}/wp-json/wc/v3`
    const res = await fetch(`${wooApiUrl}/products?category=83`) // OR 90 for "ilmeglio" category
    if (res.status !== 200) {
      return {inEvidenza: {error: 'WP-JSON API ha ritornato un errore, contattare supporto tecnico'} }
    }
    const json = await res.json()
    return { inEvidenza: json }
  }

  inserisciAvviso(avviso) {

    return (
      <h6 style={{margin: 0, padding: 5, color: 'white', background: 'red'}}>{avviso}</h6>
    )
  }

  render() {

    return (
      <div className="globalContainer">
      <div className="mainContainer">
        {this.inserisciAvviso("Si avvisano i gentili utenti che potranno verificarsi errori ed interruzioni durante la navigazione del sito, causa interventi di manutenzione in corso in questi giorni. Ci scusiamo per il disagio.")}
        <Header />
        <InEvidenza data={this.props.inEvidenza} />
        <QuattroSezioni />
        <RaccolteFondi />
        <StoriaCasa />
        <Footer />
      </div>
      </div>
  )
  }
}

export default HomePage
