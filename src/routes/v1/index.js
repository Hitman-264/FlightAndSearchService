const express = require('express');
const cityController = require('../../controllers/city_controller');
const FlightController = require('../../controllers/flight_controllers');

const city = require('../../models/city');

const router = express.Router();

router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.get('/city/:id', cityController.get);
router.patch('/city/:id', cityController.update);
router.get('/city', cityController.getAll);


router.post('/flights', FlightController.create);

module.exports = router;