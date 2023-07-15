import express from "express";
import morgan from "morgan";
import  cors from "cors";
import { config } from "dotenv";

const app = express()

const port = process.env.PORT || 8080;
 
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

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
