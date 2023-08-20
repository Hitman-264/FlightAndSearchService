const express = require("express");
const bodyParser = require("body-parser");

const {PORT} =  require('./config/serverconfig');

const ApiRoutes = require('./routes/index');
// const CityRepository = require('./repository/city_repository');
const setupAndStartServer = async()=>{
    //create express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async()=> {
        console.log("Server started at", PORT);
        
    });
}


setupAndStartServer();