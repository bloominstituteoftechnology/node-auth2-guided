const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  const { username, password } = req.headers;
   const token = req.headers.authorization

  if(token){
    jwt.verify(token, secrets.jwtSecret, (err, decodedTool))
    if (err){
      res.ststus(401).json ({message: 'Bad Panda!'});
    }
    else {
      req.username = decodedToken.username;
      next()
    }
  }


  if (username && password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'Ran into an unexpected error' });
      });
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};
