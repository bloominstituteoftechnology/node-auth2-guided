const db = require("../database/connection.js");

module.exports = {
  addUser,
  addRest,
  addProfile,
  addProf,
  find,
  findBy,
  findById,
  getById,
  fetchByID
};

function find() {
  return db("users").select("id", "username").orderBy("id");
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

function getById(userID){
  return db("users as u")
  .leftJoin("profile as p", "p.user_id","=", "u.id" )
  .select(
    "u.id",
    "p.user_id",
    "u.username",
    "p.first",
    "p.last",
    "p.bio",
    "p.profession",
    "u.location"
  )
  .where("u.id", userID)
}

function fetchByID(userID){
  return db("users as u")
  .select(
    "u.id",
    // "p.user_id",
    "u.username",
    "u.first",
    "u.last",
    "u.imgUrl",
    "u.bio",
    "u.profession",
    "u.location"
  )
  .where("u.id", userID)
}


function addRest(prof,user_id) {
    return db("profile").insert({user_id, ...prof}).then(ids=>{
      return getById(ids[0])
    });

}

// async function addRest(prof,user_id) {
//   try {
//     const [id] = await db("profile").insert({user_id, ...prof}).then(ids=>{
//       return getById(ids[0])
//     });

//     return findById(id);
//   } catch (error) {
//     throw error;
//   }
// }


async function addUser(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function addProf(profile){
  return db("owners")
  .insert(profile,"id")
  .then(([id])=>findById(id))
}


async function addProfile(profile){
  console.log("PROFILE MODEL-->", profile)
try{
  const [id]= await db("profile").insert(()=>this.from("users as u")
  .where("u.username","kay")
  .select("user_id", "first"))

  console.log("aiiiddi", id)

  // const [id]= await db("profile").insert(profile,"user_id","first", "last","bio", "profession")
  return findById(id)
}catch (error){}
throw error
}

function findById(id) {
  return db("users").where({ id }).first();
}
