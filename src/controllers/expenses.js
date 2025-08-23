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

async function deleteExpense(req, res) { }

module.exports = {
  listAll,
  listToday,
  searchItems,
  createExpense,
  deleteExpense,
};
