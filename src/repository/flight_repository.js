const {Flights} = require('../models/index');
const {Op} = require('sequelize');

class FlightRepository{
    
    #createFilter(data){
        // let filter = {...data}
        
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId;
        }
        // if(data.minPrice && data.maxPrice){
        //     Object.assign(filter, {price: {
        //         [Op.between] : [data.minPrice, data.maxPrice]
        //     }})
        // }
        // if(data.minPrice && data.maxPrice){
        //     Object.assign(filter, {
        //         [Op.and] : [
        //             {price : { [Op.gte] : data.minPrice }},
        //             {price : { [Op.lte] : data.maxPrice }}
        //         ]
        //     })
        // }
        let priceFilter = [];
        if(data.minPrice){
            priceFilter.push({
                price : {
                    [Op.gte] : data.minPrice
            }});
            // Object.assign(filter, {price: {[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({
                price : {
                    [Op.lte] : data.maxPrice
                }
            })
            // Object.assign(filter, {price: {
            //     [Op.lte] : data.maxPrice
            // }})
            
        }      // this will only work here, as initially filter assigned with min price, then with max price. so any one of them will only persist.
        Object.assign(filter, {
            [Op.and] : priceFilter
        });
        console.log(filter);
        return filter;
    }



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

    async getFlight(flightId){
        try{
            const flight = await Flights.findbyPk(flightId);
            return flight;
        }
        catch(error){
            console.log("something went wrong at repository layer 2000");
            throw {error};
        }
    }

    async getAllFlight(filter){
        try{
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        }
        catch(error){
            console.log("something went wrong at repository layer 3000");
            throw {error};
        }
    }


}

module.exports = FlightRepository;

/**
 * where: {
 *      arrivalAirportId : 2,
 *      departureAirportId : 4,
 *      price: {[Op.gte] : 4000}
 * }
 */