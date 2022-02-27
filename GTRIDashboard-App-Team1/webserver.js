if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const http = require('http')
const app = require('./serverside/app')
const server = http.createServer(app)
server.listen(process.env.PORT || 3000)

console.log('server running')

const Users = require('./serverside/models/users')

const express = require('express')
