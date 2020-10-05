const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');  // added

const router = require("express").Router();

const Users = require("../users/users-model.js");
const { isValid } = require("../users/users-service.js");

router.post("/register", async (req, res, next) => {
  const credentials = req.body;

  try {
    if (isValid(credentials)) {
      const rounds = process.env.BCRYPT_ROUNDS ?
        parseInt(process.env.BCRYPT_ROUNDS) : 8;

      const hash = bcryptjs.hashSync(credentials.password, rounds);
      credentials.password = hash;

      const user = await Users.add(credentials);
      const token = generateToken(user);
      res.status(201).json({ data: user, token });
    } else {
      next({ apiCode: 400, apiMessage: 'username or password missing, or password not alphanumeric' });
    }
  } catch (err) {
    next({ apiCode: 500, apiMessage: 'error saving new user', ...err });
  }

});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (isValid(req.body)) {
    Users.findBy({ username: username })
      .then(([user]) => {
        // compare the password the hash stored in the database
        if (user && bcryptjs.compareSync(password, user.password)) {

          const token = generateToken(user); // added  --- in order to create the token

          res.status(200).json({ message: "Welcome to our API", token: token });  // added token
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message: "please provide username and password and the password shoud be alphanumeric",
    });
  }
});

// better to create a function down here instead of keeping in the post, 
// this will centralize how we create a token 

function generateToken(user) { // added

  const payload = {    
    subject: user.id,
    username: user.username,
    role: user.role
  };

  // const secret = "some secrect password thingy";   // added
  const secret = process.env.JWT_SECRET || "some insecure secret";

  const options = { // added
    expiresIn: "1d"
  }; 

    const token = jwt.sign(payload, secret, options);  // added

    return token;

}


module.exports = router;



/*
   Payload is where we list our claims and to keep it simple we are only using 
   subject, username, and role. 

   We retrieve the user in our findBy -- this is the user object and we will use it with our claims
   example user.id, user.username, and user.role

   So the IAT or issued timestamp will automatically be added by jwt
   And if we include an option that indiacates how tong the token should last, 
   it will also will automatically create an expiration timestamp 

   Options we are using expiresIn and this has many options to choose from 1d = one day
   1h = one hour... there are more if you look it up

  we can pull our secret from the environment

*/