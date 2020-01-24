import React from 'react'
// import fetch from 'isomorphic-unfetch'

class HomePage extends React.Component {
  static async getInitialProps(ctx) {
    // const res = await fetch('https://api.github.com/repos/zeit/next.js')
    // const json = await res.json()
    return { test: "yes" }
  }

  render() {
    return (
      <div>
        <h1>HELLO WORLD</h1>
      </div>
  )
  }
}

export default HomePage
