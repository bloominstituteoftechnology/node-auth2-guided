const router = require("express").Router()

const User = require("./users-model.js")

const { restricted, checkRole } = require('../auth/auth-middleware')

router.get("/", restricted, checkRole('admin'), (req, res, next) => {
  User.find()
    .then(users => {
      res.json(users)
    })
    .catch(next) // our custom err handling middleware in server.js will trap this
})

module.exports = router
