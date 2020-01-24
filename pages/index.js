import React from 'react'
// import fetch from 'isomorphic-unfetch'

import Header from '../components/Header/Header'

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
        <h1>HELLO WORLD {this.props.test}</h1>
      </div>
  )
  }
}

export default HomePage
