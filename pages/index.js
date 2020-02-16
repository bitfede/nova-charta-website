import React from 'react'
// import fetch from 'isomorphic-unfetch'
import Header from '../components/Header/Header'
import InEvidenza from '../components/InEvidenza/InEvidenza'
import QuattroSezioni from '../components/QuattroSezioni/QuattroSezioni'
import RaccolteFondi from '../components/RaccolteFondi/RaccolteFondi'

class HomePage extends React.Component {
  static async getInitialProps(ctx) {
    // const res = await fetch('https://api.github.com/repos/zeit/next.js')
    // const json = await res.json()
    return { test: "yesss" }
  }

  render() {
    return (
      <div className="mainContainer">
        <Header />
        <InEvidenza />
        <QuattroSezioni />
        <RaccolteFondi />
      </div>
  )
  }
}

export default HomePage
