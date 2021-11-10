// AUTHENTICATION
const restricted = (req, res, next) => {
  next()
}

// AUTHORIZATION
const checkRole = (req, res, next) => {
  next()
}

module.exports = {
  restricted,
  checkRole,
}
