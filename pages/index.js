import React from 'react'
// import fetch from 'isomorphic-unfetch'
import Header from '../components/Header/Header'
import InEvidenza from '../components/InEvidenza/InEvidenza'

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
      </div>
  )
  }
}

export default HomePage
