const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken')

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});
// server.get('/token', (req,res)=> {
//   const token = jwt.sign({
//     token :'Here it is',
//     exp: 1000*60*5
//   }, 'secret')
//   res.status(400).json(token)
// })

server.get('/token', (req,res)=> {
  const payload = {
    subject: 'thisuser',
    userid: 'rwest',
    favoriteFood: 'Pho'
  };
  const secret ='wethotuwasatoad';

  const token = jwt.sign(payload, secret);

  res.json(token);
 })

module.exports = server;
