const { getConnection } = require("../config/db.js");

async function listAll(req, res) {}

async function listToday(req, res) {}

async function searchItems(req, res) {}

async function createExpense(req, res) {}

async function deleteExpense(req, res) {}

module.exports = {
  listAll,
  listToday,
  searchItems,
  createExpense,
  deleteExpense,
};
