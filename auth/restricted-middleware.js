const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.headers.authorization ?
      req.headers.authorization.split(' ')[1] :
      '';
  console.log("token: ", token);

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Invalid or Missing Credentials' });
      } else {
        req.decodedToken = decodedToken;
        next()
      }
    });

  } else {
    res.status(401).json({ message: 'Invalid or Missing Credentials' });
  }

};


/*
  if there is a token, decodedToken  = jwt.verify and pass in the token and the secret
  we will be using the asynchronous method and use a call back  --> passing the error parameter and the decodedToken parameter. 
  Then if there is an error we will set our status at 401
  if there is no error then we are going to take the decodedToken and save it on the request object.

  the responsiblity of the server is once it has verified the token
    when the client sends the request with the token and it gets verified
    the servers responsibility is make it available to the api calls.

    we will do this by saving it on the request object. That way everything else in the 
    middleware chain will have access to it because there could be important data that is 
    needed to make decisions about the user  --- REMEMBER THIS IS STATELESS

    The server that we are creating here doesn't keep info about the user in memory or about the user state or logged in state in memory.
    it is about the users permissions/authorizations

    Then call next() 

*/