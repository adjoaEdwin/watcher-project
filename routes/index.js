const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/now', (req, res) => {
  // duration
  // interest
  // region

  // interest over region
});

router.post('/register-via-email', userController.registerUser)

router.get('/ibr', (req, res) => {
  // interest over region
});

router.get('/iot', (req, res) => {
  // interest over region
});

router.get('/rq', (req, res) => {
  // interest over region
});



module.exports = router;