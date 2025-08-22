const express = require('express');
const router = express.Router();  // ✅ correct

const authController = require('../controllers/authcontroller');

// Example test route
router.get('/', authController.login);
router.post('/signup', authController.signup);

module.exports = router;
