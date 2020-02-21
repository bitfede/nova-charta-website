require('dotenv').config()

module.exports = {
  env: {
    WOOCOMMERCE_SECRET_KEY: process.env.WOOCOMMERCE_SECRET_KEY || 'error'
  }
}
