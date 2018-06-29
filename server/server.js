const path = require('path')
const express = require('express')

const fruitRoutes = require('./routes/fruits')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/', fruitRoutes)

module.exports = server
