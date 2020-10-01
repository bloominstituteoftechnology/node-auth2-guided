const router = require("express").Router();
const db = require("../database/connection.js");

const Users = require("./users-model.js");
const {restrict} = require("../auth/restricted-middleware.js");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

router.get("/user/:id", async(req,res,next)=>{
  const {id}=req.params
  // res.status(200).json({message:"hoorai"})
  try{
const user= await Users.fetchByID(id)

res.json(user)
  }catch(err){
      next(err)
  }
})


router.put('/user/:id', restrict("admin"), (req, res) => {
  // do your magic!
  // console.log("req-->", req) //<--really long details
  Users.update(req.params.id, req.body)
  .then((user)=>{
    if(user){
      res.status(200).json(user)
    }else{
      res.status(404).json({message: "the user could not be found"})
    }
  })
  .catch(err=>next(next))
});


//ALL THE POSTS FROM USER #1
router.post('/:id/posts', restrict("admin"), (req, res) => {
  // do your magic!
  const postInfo = { ...req.body, user_id: req.params.id };

  Users.addClient(postInfo)

  .then(post => {
    console.log("POST->", post)
    res.status(210).json(post);
  })
  .catch(err=>next(err));
});

router.get('/:id/posts', async(req, res, next) => {
  try{
    const posts = await Users.fetchClientByID(req.params.id)

    res.status(200).json(posts)
  }
catch(err){next(err)}
});

router.put('/:id/posts', restrict("admin"), async(req, res, next) => {
  // res.status(200).json({message: "Something"})
  try{
    const posts = await Users.updateClients(req.params.id, req.body)

    res.status(200).json(posts)
  }
catch(err){next(err)}
});

router.delete('/:id/posts', restrict("admin"), async(req, res, next) => {
  // res.status(200).json({message: "Something"})
  try{
    const posts = await Users.removeClient(req.params.id, req.body)

    res.status(200).json(posts)
  }
catch(err){next(err)}
});




module.exports = router;

