const jwt=require("jsonwebtoken")

function restrict(role){

  return async (req,res, next)=>{
    const roles=["basic", "admin", "super_admin"] //highest permission should be last 
    const authError={
      message:"Invalid creds"
    }
    try{
      // const token = req.cookies.token //req.headers.authorization
      const token = req.headers.authorization


      if(!token){
        console.log("true")
        return res.status(401).json({message: "Error1 s"})
      }

      jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        console.log("err",err)
        console.log("decode", decoded)
        if(err){
          return res.status(401).json({message:"error 2"})
        }
        //make the token's payload availale to other middleware function
        
              //CHECK USER ROLE
              if (role && roles.indexOf(decoded.userRole)<roles.indexOf(role)){ //super admin
                return res.status(403).json({message: "You are not allowed here"})//forbidden error
              }
            
              //CHECK IF USER EXISTS

      //RESTRICT IT TO ADMIN ONLY 
        
        
        req.token = decoded
              next()
      })



    }catch(err){next(err)}
  }
}

module.exports= {restrict}


// module.exports = (req, res, next) => {
//   // add code here to verify users are logged in
//   next();
// };
