const path = require('path')
const express = require('express')
const cors = require('cors')

const authRouter = require('./auth/auth-router.js')
const usersRouter = require('./users/users-router.js')
const { restricted } = require('./auth/auth-middleware.js');
const checkRole = require('./auth/check-role-middleware.js');


const server = express()

server.use(express.static(path.join(__dirname, '../client')))
server.use(express.json())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/users', restricted, checkRole("admin"), usersRouter)

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'))
})

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server
