import React from 'react'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header/Header'
import CatalogoLista from '../components/CatalogoLista/CatalogoLista'
import Footer from '../components/Footer/Footer'

class Catalogo extends React.Component {

  render() {

    return (
      <div className="globalContainer">
      <div className="mainContainer">
        <Header />
        <CatalogoLista />
        <Footer />
      </div>
      </div>
  )
  }
}

export default Catalogo
