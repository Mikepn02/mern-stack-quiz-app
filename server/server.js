const express = require("express");
const { Router } = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { config } = require("dotenv");
const router = require("./routers/router");
const connect = require('./connection/connect')



const app = express()

 
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

const port = process.env.PORT || 8080;
app.use('/api',router);

connect();



app.get('/',(req,res) => {
    try{
       res.json("Get request")
    }catch(err){
        console.log(err);
    }
});
app.listen(port,()=>{
    console.log(`Server is running on ${port} `);
})
