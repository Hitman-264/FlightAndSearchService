const {Flights} = require('../models/index');

class FlightRepository{

    async createFlight(data){
        try{
            const flight = await Flights.create(data);
            return flight;
        }
        catch(error){
            console.log("something went wrong at repository layer 2000");
            throw {error};
        }
    }
}

module.exports = FlightRepository;