const { getConnection } = require("../config/db.js");
const bcrypt = require("bcrypt");

async function login(req, res) {}

async function hashPassword(req, res) {
  const raw = req.params.raw;
  bcrypt.hash(raw, 10, (err, hash) => {
    if (err) {
      return res.status(500).send("Error creating password");
    }
    res.send(hash);
  });
}

module.exports = { login, hashPassword };
