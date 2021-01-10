const express = require('express')
const requestApi = require('../requestApi')
const customer = require('../api/customer/customer')

module.exports = function (server) {

    const api = express.Router()
    server.use('/api', api)

    customer.use(api)
}