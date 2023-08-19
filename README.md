# Welcome to Flight Service

## Project Setup
- Clone the project on your local
- Execute 'npm install' one the same path as of your root directory of the downloaded project
- Creat a .env file in the root directory and add the following environment variables
    -PORT=3000
- Inside the src/config folder create a new file 
config.json and then add the following piece of json

...
{
  "development": {
    "username": "<Your DbLogin Name>",
    "password": "<Your DB Password>",
    "database": "Flight_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
...
-Once you have added your db config as listed above, go to the src folder from your terminal and execute 'npx sequelize db:create'