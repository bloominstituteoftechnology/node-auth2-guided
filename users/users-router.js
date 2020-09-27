const router = require("express").Router();
const db = require("../database/connection.js");

const Users = require("./users-model.js");
const {restrict} = require("../auth/restricted-middleware.js");

router.get("/", restrict("admin"), (req, res) => {
  // res.status(200).json({message:"wwaaay"})
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});


router.get("/user/:id", async(req,res,next)=>{
  const {id}=req.params
  try{
const user= await Users.getById(id)
res.json(user)
  }catch(err){
      next(err)
  }
})




module.exports = router;


// const router = require("express").Router();
// const bcrypt= require("bcryptjs")
// const Users = require("./users-model.js");
// const {restrict} = require("../middleware/isValid")

// // router.get("/", (req, res) => {
// //   Users.find()
// //     .then(users => {
// //       res.status(200).json(users);
// //     })
// //     .catch(err => res.send(err));
// // });

// router.get("/users", restrict(), async(req,res,next)=>{
//   // res.status(200).json({message:"wohoo"})
  
//   try{
//     // res.json(await Users.find())
//       // res.status(200).json({message:"wohoo"})
//       res.status(200).json(await Users.find())


//   }catch(err){
//     next(err)
//   }

// })

// router.post("/users", async(req,res,next)=>{
//   try{
//     const {username, password,role}=req.body
//     const user = await Users.findBy({username}).first()

//     if(user){
//       return res.status(409).json({
//         message: "Username is already taken"
//       })
//     }
//     const newUser = await Users.add({
//       username,
//       //hash the password with a time complexity 
//       password: await bcrypt.hash(password, 13),
//     role})
//     res.status(201).json(newUser)
    

//   }catch(err){next(err)}
// })


// router.post("/login", async(req,res,next)=>{
//   try{
//     const {username, password,role}=req.body
//     const user = await Users.findBy({username}).first()

//     if(!user){
//       return res.status(401).json({
//         message: "Invalid credentials"
//       })
//     }

//     const restrict=await bcrypt.compare(password, user.password) //password in the body = user.pass
//     if (!restrict){
//       return res.status(401).json({
//         message:"Invalid Credentials "
//       })
//     }
//     //we have to create a new session
//     req.session.user=user

//     res.json({message: `Welcome ${user.username}`})


//   }catch(err){next(err)}
// })

// router.get("/logout", restrict(), async (req,res,next)=>{
//   try{
//     req.session.destroy((err)=>{
//       if(err){
//         next(err)
//       }else{
//         res.status(204).end()
//       }
//     })
//   }catch(err){

//   }
// })

// module.exports = router;

