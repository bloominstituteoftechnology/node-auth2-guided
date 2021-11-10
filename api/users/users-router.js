const router = require("express").Router()

const User = require("./users-model.js")

const { restricted } = require('../auth/auth-middleware')

router.get("/", restricted, (req, res, next) => {
  User.find()
    .then(users => {
      res.json(users)
    })
    .catch(next) // our custom err handling middleware in server.js will trap this
})

module.exports = router
