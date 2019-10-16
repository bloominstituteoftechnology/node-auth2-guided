const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const Users = require('../users/users-model.js');
const secrets = require('./secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.secrets, (err, decodedToken) => {
      if (err){
        res.status(401).json({message: 'denied'})
      } else {
        req.username = decodedToken.username;
        next();
      }
    })
  } else {
    res.status(400).json({ message: "no token"})
  }
};
