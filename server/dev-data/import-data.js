const mongoose = require('mongoose');
const fs = require('fs')
const dotenv = require('dotenv');
const Question = require('../models/questionSchema')
 // Load environment variables
dotenv.config({ path: './config.env' });

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/quiz', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB:', err.message);
});


const tours = JSON.parse(fs.readFileSync("data.json","utf-8"));

const importData = async() => {
    try{
     await Question.create(tours);
     console.log("Data successfully loaded")
     process.exit();
    }catch(err){
      console.log(err);
    }
}

const deleteData = async() => {
    try{
        await Question.deleteMany();
        console.log("Data successfully Deleted");
        process.exit();
       }catch(err){
         console.log(err);
       }
}
// import while consoling process.argv it is on index 2 in the array

if(process.argv[2] === '--import'){
  importData();
}
else if(process.argv[2] === '--delete'){
  deleteData();
}

// console.log(process.argv);