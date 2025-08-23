const { Router } = require('express');
const { login, hashPassword } = require('../controllers/auth.js');

const router = Router();

router.get('/password/:raw', hashPassword);
router.post('/login', login);

module.exports = router;