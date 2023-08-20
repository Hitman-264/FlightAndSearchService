const express = require("express");
// const bodyParser = require("body-parser");
const CityRepository = require('./repository/city_repository');

const {PORT} =  require('./config/serverconfig');
// const CityRepository = require('./repository/city_repository');
const setupAndStartServer = async()=>{
    //create express object
    const app = express();
    // const PORT = 3000;
    app.listen(PORT, async()=> {
        console.log("Server started at", PORT);
        const repo  = new CityRepository();
        repo.createCity({name: "new Delhi"});
        // console.log(process.env);
    });
}


setupAndStartServer();