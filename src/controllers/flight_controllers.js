const {FlightService} = require('../services/index');
const {SuccessCodes} = require('../utils/error_codes');


const flightService = new FlightService();

const create = async (req,res)=>{
    try{
        const flightRequestData = {
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            err:{},
            message: "successfully created a flight",
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'NOt able to create a flight',
            err: error
        })
    }
}

const getAll = async (req,res)=>{
    try{
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err:{},
            message: "successfully fetched the flights",
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'NOt able to fetch the  flights',
            err: error
        })
    }
}

const get = async (req,res)=>{
    try{
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err:{},
            message: "successfully fetched the flights",
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'NOt able to fetch the  flights',
            err: error
        })
    }
}

const update = async (req, res)=>{
    try{
        const response = await flightService.updateFlight(req.params.id, req.body);
        console.log("Controllers response is : ", response);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err:{},
            message: "successfully updated the flights",
        });
    }catch(error){
        console.log("Controllers" , error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'NOt able to update the  flights',
            err: error
        })
    }
}
module.exports = {
    create,
    getAll,
    get,
    update,
}