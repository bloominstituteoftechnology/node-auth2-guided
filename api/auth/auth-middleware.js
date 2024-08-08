// AUTHENTICATION

const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'is it secret, is it safe?';

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        // something wrong with token
        res.status(401).json({ you: "can't touch this" })
      } else {
        // token is good, we can see the data inside the decodedToken
        req.jwt = decodedToken;

        next()
      }
    })

  } else {
    res.status(401).json({ you: "shall not pass!" })
  }

}






module.exports = {
  restricted,

}
