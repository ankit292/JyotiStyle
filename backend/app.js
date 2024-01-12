const dotenv = require('dotenv');
const mongoDB = require('./db/connection');
const express = require('express')
const app = express();
const cors = require('cors')
const router = require('./routers/router');
const port =  process.env.PORT || 8000;
dotenv.config({path:'./.env'})


// mongo db connection 
mongoDB();

app.use(express.json())    // <==== parse request body as JSON

// add user Scheema
app.use(router);
app.use(cors());


app.listen(port,(req, res)=>{
    console.log('route port createdl')
})