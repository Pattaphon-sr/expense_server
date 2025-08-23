const { getConnection } = require("../config/db.js");

async function listAll(req, res) {}

async function listToday(req, res) {}

async function searchItems(req, res) {}

async function createExpense(req, res) {
  const { userId, item, paid } = req.body;
  if (!userId || !item || paid === undefined) {
    return res.status(400).json({ error: "userId, item, and paid are required" });
  }
  const sql = "INSERT INTO expenses (user_id, item, paid) VALUES (?, ?, ?)";
  try {
    const con = await getConnection();
    const [result] = await con.execute(sql, [userId, item, paid]);
    res.status(201).json({ id: result.insertId, userId, item, paid });
  } catch (err) {
    res.status(500).send("Database error");
  }
}

async function deleteExpense(req, res) {}

module.exports = {
  listAll,
  listToday,
  searchItems,
  createExpense,
  deleteExpense,
};
