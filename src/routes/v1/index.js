const express = require('express');

const {FlightMiddlewares} = require('../../middleware/index');

const cityController = require('../../controllers/city_controller');
const FlightController = require('../../controllers/flight_controllers');
const AirportController = require('../../controllers/airport_controller')
const city = require('../../models/city');



const router = express.Router();

router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.get('/city/:id', cityController.get);
router.patch('/city/:id', cityController.update);
router.get('/city', cityController.getAll);


router.post('/flights', FlightMiddlewares.validateCreateFlight, FlightController.create);
router.get('/flights', FlightController.getAll);

router.post('/airports', AirportController.create);

module.exports = router;