const server = require('./api/server')
const { PORT } = require('./config')

server.listen(PORT, () => {
  console.log(`\n** Running on port ${PORT} **\n`)
})
