const db = require("../database/dbConfig");

module.exports = {
  add,
  findBy,
  find
};

function add(userData) {
  return db("users").insert(userData);
}

function find() {
  return db("users");
}

function findBy(username) {
  return db("users").where({ username });
}
