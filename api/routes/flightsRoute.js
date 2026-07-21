const express = require('express');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get('/', async (req, res) => {
  await bookingController.getFlights({ req, res });
});

module.exports = router;
