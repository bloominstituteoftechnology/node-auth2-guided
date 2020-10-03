const db = require("../database/connection.js");

module.exports = {
  addUser,
  addClient,
  find,
  findBy,
  findById,
  getById,
  fetchByID,
  fetchClientByID,
  fetchClientPostByID,
  update,
  updateClients,
  removeClient,

};

function find() {
  return db("users").select("id", "username", "first", "last","location","imgUrl","profession", "bio").orderBy("id", "desc");
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

function fetchClientByID(clientID){
  return db("clients as c")
  .select(
    "c.id",
    "c.user_id",
    "c.client_name",
    "c.service",
    "c.client_ImgUrl"
  )
  .where("c.user_id", clientID) //take all the posts with this user's id
}

function fetchClientPostByID(clientID, usr_id){
  return db("clients as c")
  .select(
    "c.id as client_id",
    "c.user_id",
    "c.client_name",
    "c.service",
    "c.client_ImgUrl"
  )
  .where("c.id", clientID, "c.client_name") 
}


async function addUser(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}


function addClient(client) {
  console.log("CLIENTSS-->", client)
  return db('clients')
    .insert(client)
    .then(ids => ({ id: ids[0] }));
}


function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes);
}

function updateClients(id, changes) {
  return db('clients')
    .where({ id })
    .update(changes);
}

function findById(id) {
  return db("users").where({ id }).first();
}

// function removeClient(id){
//   return db("clients")
//   .remove(id)
//   .then(ids => ({ id: ids[0] }));
// }

function removeClient(id, changes) {
  return db('clients')
    .where({ id })
    .delete(changes);
}
