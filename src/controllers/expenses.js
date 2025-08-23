const { getConnection } = require("../config/db.js");

async function listAll(req, res) { }

async function listToday(req, res) { }

async function searchItems(req, res) {
  // Use userId and name from request body for search
  const { userId, name } = req.body;
  if (!userId || !name) {
    return res.status(400).json({ error: "userId and name are required in body" });
  }
  try {
    const connection = await getConnection();
    const [results] = await connection.execute(
      "SELECT * FROM expenses WHERE user_id = ? AND item LIKE ?",
      [userId, `%${name}%`]
    );
    res.json(results);
  } catch (error) {
  res.status(500).json({ error: error.message });
  }
}

async function createExpense(req, res) { }

async function deleteExpense(req, res) {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const con = await getConnection();
    const [rows] = await con.execute("SELECT * FROM `expenses` WHERE id = ? AND user_id = ?", [id, userId]);
    if (rows.length === 0) {
      return res.status(404).send("Please input the correct id!");
    }
    const [results] = await con.execute("DELETE FROM `expenses` WHERE id = ? AND user_id = ?", [id, userId]);
    if (results.affectedRows === 0) {
      return res.status(404).send("Please input the correct id!");
    }
    res.send("Expense deleted successfully");
  } catch (err) {
    res.status(500).send("Database error");
  }
}

module.exports = {
  listAll,
  listToday,
  searchItems,
  createExpense,
  deleteExpense,
};
