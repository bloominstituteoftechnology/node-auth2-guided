module.exports = function (role) {
    return function (req, res, next) {
        if (req.decodedToken && req.decodedToken.role && req.decodedToken.role === role) {
            next();
        } else {
            res.status(403).json({ message: "Not Authorized for that request" });

        }
    }
}


/*
- We are going to export a function that will take a roll as a parameter. Then it will return another function that is middleware. This middleware will check to see if the user has the role that we want them to have.

- Every time we call the "check role middleware" function, we can give it the role that we care          about and what it will do is give us back a middleware function that will check for the role we care about. So we don't have to have differnt function that check for different roles. So this will allow us to use one function any give role but the signature of this function needs to be valid middleware for express. 

- Every time we call the function that we are exporting, we will create a new middleware function that can be used. Inside this middleware function, we will do the check for whatever role we sent in the higher order.

-  We are going to check to see if on the request object that there is a decoded tech token object.
	* Remember once we have gone through restricted, we validated that there is a token and if there is, we added it to the request object. 

- Our pattern needs to be that we are only going to check for roles AFTER we have gone through restricted. The restricted is going to take that decoded token if it exists, and put it on the request object. 

- So we will check if it exists and also check to see if it has a role property and we are going to see if the role equals to the role that was passed in our function.

- And if so, we are going to call next();

- And if not, we are going to stop the chain, we are going to send back a 403 (not authorized)

*/