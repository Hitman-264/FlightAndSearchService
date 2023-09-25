const {FlightRepository, AirplaneRepository} = require('../repository/index');

class FlightService{

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try{

            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity 
            });
            return flight;
        }
        catch(error){
            console.log("something went wrong at repository layer ");
            throw {error};
        }
    }
    async getFlightData(){
            //todo
    }
}

module.exports = FlightService;
/**
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * departureTime
 * price
 * totalSeats -> airplane
 */