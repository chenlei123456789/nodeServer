'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"/api/v1"',
  // BASE_API: '"http://localhost/api/v1"',
  APP_ORIGIN: '"https://wallstreetcn.com"',
  API_PREFIX: "/api/v1"
})
