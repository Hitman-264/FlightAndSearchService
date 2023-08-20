const {CityService} = require('../services/index');

const cityService = new CityService();

/**
 * 
 * it will be POST request
 *  data will be present in req.body;
 * 
 */
const create = async function(req,res){  
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message: 'Successfully created a city',
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'NOt able to create a city',
            err: error
        })
    }
}

const destroy = async function(req,res){
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message: 'Successfully deleted a city',
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'NOt able to delete a city',
            err: error
        })
    }
}

// PATCH -> /city/:id
const update = async (req,res)=>{
    try{
        const city = await cityService.createCity(req.params.id, req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message: 'Successfully updated a city',
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'NOt able to update a city',
            err: error
        })
    }
}

 // GET -> /city/:id
const get = async (req,res)=>{
    try{
        const city = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data:city,
            success:true,
            message: 'Successfully fetched a city',
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'NOt able to get a city',
            err: error
        })
    }
}