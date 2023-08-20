const {City} = require('../models/city');

class CityRepository{


    async createCity({name}){
        try{
            const city = await City.create({name});  //{name:"new delhi"}
            return city;
        }catch(error){
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }  
    async deleteCity(cityId){
        try{
            await City.destroy({
                where : {
                    id:cityId
                }
            });
        }catch(error){
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data){  // {name: "Prayagraj"}
        try{
            const city = await City.update(data, {
                where : {
                    id : cityId
                }
            });
            return city;
        }catch(error){
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findbyPk(cityId);
            return city;
        }catch(error){
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;