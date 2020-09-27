const db = require("../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  getById,
};

function find() {
  return db("users").select("id", "username").orderBy("id");
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

function getById(userId){
  return db("profile as p")
  .join("users as u", "u.id", "p.user_id" )
  .select(
    "p.id",
    "p.user_id",
    "p.first",
    "p.last",
    "u.username",
    "p.bio",
    "p.profession"
  )
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("users").where({ id }).first();
}
