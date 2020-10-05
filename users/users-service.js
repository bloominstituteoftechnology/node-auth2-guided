module.exports = {
  isValid,
};

function isValid(user) {
  return Boolean(user.username && user.password && typeof user.password === "string");
}

/*
  This is exporting a single funtion, that is used to determin ig the user object
  that we pass into that it has a username and password.
  creates a simple way and confirms that the password is a string. 

  This pattern is common because when you want to validate schema and then you can 
  create an entire error handling structure wher you can send back detailed information, letting 
  the api user know that they may have failed to include a required field. 
*/
