const { getConnection } = require("../config/db.js");
const bcrypt = require("bcrypt");

async function login(req, res) {
  const { username, password } = req.body;
  const sql = "SELECT * FROM `users` WHERE username = ?";
  try {
    const con = await getConnection();
    const [results] = await con.execute(sql, [username]);
    if (results.length !== 1) {
      return res.status(401).send("wrong username");
    }
    const same = await bcrypt.compare(password, results[0].password);
    if (same) {
      res.json({
        username: results[0].username,
        id: results[0].id,
      });
    } else {
      res.status(401).send("Wrong password");
    }
  } catch (err) {
    res.status(500).send("Database error");
  }
}

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
