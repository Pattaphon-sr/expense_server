const { Router } = require('express');
const {
  listAll,
  listToday,
  searchItems,
  createExpense,
  deleteExpense
} = require('../controllers/expenses.js');

const router = Router();

router.get('/expenses', listAll);
router.get('/expenses/today', listToday);
router.post('/expenses/search', searchItems);
router.post('/expenses', createExpense);
router.delete('/expenses/:id', deleteExpense);

module.exports = router;