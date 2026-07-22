const express = require('express');
const flightsController = require('../controllers/flightsController');

const router = express.Router();

router.get('/', async (req, res) => {
  await flightsController.getFlights({ req, res });
});

module.exports = router;
