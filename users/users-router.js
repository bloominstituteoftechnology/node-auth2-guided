const router = require("express").Router();
const db = require("../database/connection.js");

const Users = require("./users-model.js");
const {restrict} = require("../auth/restricted-middleware.js");

router.get("/", async(req, res, next) => {
  try{
    const users= await Users.find()
    res.status(200).json(users);
    console.log("WHY IS THIS NOT LOGGING IN")
  }catch(err){
    next(err)
  }
});

router.get("/user/:id", async(req,res,next)=>{
  const {id}=req.params
  try{
const user= await Users.fetchByID(id)

res.json(user)
  }catch(err){
      next(err)
  }
})


router.put('/user/:id', restrict("admin"), async(req, res, next) => {
  // do your magic!
  try{
    const user = await   Users.update(req.params.id, req.body)
    res.status(200).json(user)


  }catch(err){
    next(err)
    res.status(404).json({message: "the user could not be found"})
  }

});


//ALL THE POSTS FROM USER #1
router.post('/:id/posts', restrict("admin"), async (req, res, next) => {
  // do your magic!
  console.log("POST", req.body)

  try{

    console.log("req body", req.body)
    const postInfo = { ...req.body, user_id: req.params.id };
    const post = await Users.addClient(postInfo)
    res.status(210).json(post);
  }catch(err){next(err)}
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

