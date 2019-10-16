const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  // if user is admin, they can see all users
  // if user isn't admin, they can only see themselves
  const { subject, role } = req.decodedToken;

  if (role === 'admin') {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.status(500).send(err));
  } else {
    Users.findById(subject)
      .then(user => {
        res.json(user);
      })
      .catch(err => res.status(500).send(err));
  }
});

module.exports = router;
