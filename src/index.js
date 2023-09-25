const express = require("express");
const bodyParser = require("body-parser");

const {PORT} =  require('./config/serverconfig');

const ApiRoutes = require('./routes/index');

const {City, Airport} = require('./models/index');

// const {Airplane} = require('./models/index');
const db = require('./models/index');
// const CityRepository = require('./repository/city_repository');
const setupAndStartServer = async()=>{
    //create express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async()=> {
        console.log("Server started at", PORT);
        // if(process.env.SYNC_DB){
        //     db.sequelize.sync({alter:true});
        // }
        
        // await Airplane.create({
        //     modelNumber:'Bombardier CRJ'
        // });
        

        // const airports = await Airport.findAll({
        //     include: City
        //     // include:[
        //     //     {model:City}
        //     // ]
        // });
        // console.log(airports);

        // const airports = await City.findAll({
        //     where:{
        //         id : 5
        //     },
        //     include:{
        //         model:Airport
        //     }
        // })
        // const airports = await City.findByPk(5, {
        //     include: Airport
        // })
        // console.log(airports);
        // const city = await City.findOne({  // to find all the airports of a city whose id is 5
        //     where:{ id: 5}
        // });
        // const airports = await city.getAirports(); //before sync, this won't work
        
        // // if we want to add another airport to that city, we can do following.
        
        // // const newAirport = await Airport.create({
        //     //     name: 'Jindal Vijaynagar Airport',
        //     //     cityId:14
        //     // });
        //     const newAirport = await Airport.findOne({
        //         where:{ id : 5}
        //     });
        //     await city.addAirport(newAirport);
        //     // console.log(city, airports);
    });
}


setupAndStartServer();