const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../../config');

// AUTHENTICATION
const restricted = (req, res, next) => {
  const token = req.headers.authorization;

  if(token == null) {
    next({ status: 403, message: 'Forbidden' });
    return;
  }

  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if(err) {
      console.log(err);
      next({ status: 403, message: 'Forbidden' });
      return;
    }

    req.decodedToken = decodedToken;
    next();
  });
}

// AUTHORIZATION
const checkRole = (req, res, next) => {
  next()
}

module.exports = {
  restricted,
  checkRole,
}
