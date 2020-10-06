const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");
const checkRole = require('../auth/check-role-middleware');

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

router.delete("/:id", restricted, checkRole(1), (req, res) => {
  // delete data
  res.status(501).json({ message: "not implemented" })
})


// post for users to get added to the database by the registration process
// but maybe an admin should have the ability to create users directly
router.post("/:id", restricted, checkRole(1), (req, res) => {
  // create data
  res.status(501).json({ message: "not implemented" })
})


// put to modify users
router.put("/:id", restricted, checkRole(1), (req, res) => {
  // edit data
  res.status(501).json({ message: "not implemented" })
})




module.exports = router;


/*
  because our restricted endpoint only checks to see if you are logged in. This is basically
  saying now it doesn't matter what role you are because you have a token that validates per the restricted middleware.

  we are going to create other middleware so there are restrictions per role. 



*/