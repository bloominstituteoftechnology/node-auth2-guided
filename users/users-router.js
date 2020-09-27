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


// router.get("/user/:id", restrict("admin"), async(req,res,next)=>{
//   const {id}=req.params
//   try{
// const user= await Users.getById(id)
// res.json(user)
//   }catch(err){
//       next(err)
//   }
// })

router.get("/user/:id", restrict("admin"), async(req,res,next)=>{
  const {id}=req.params
  // res.status(200).json({message:"hoorai"})
  try{
const user= await Users.getById(id)
res.json(user)
  }catch(err){
      next(err)
  }
})

// router.get('/user/:id', async(req, res) => {

//   try{
//   const animals= await Users.getById({message:"req.params.id"})
//   res.json(animals)
// }catch(err){
// next(err)
// }

// });



// router.get("/user/:id", (req,res)=>{
//   // res.status(200).json({message:"hoorai"})
//   const {id}=req.params
//   Users.getById(id)
//   .then(scheme=>{
//     if(scheme){
//         res.status(200).json({message:"hoorai"})

//       // res.json(scheme)
//     }else{
//       res.status(404).json({message: "Couldnt find"})
//     }

//   }).catch(err=>{
//     res.status(404).json({message:"Woopsie"})
//   })
// })




module.exports = router;

