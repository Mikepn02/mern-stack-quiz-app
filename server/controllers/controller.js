const Question = require('../models/questionSchema');
const {question , answers} = require('../connection/data')


exports.getQuestions = async(req,res) => {
    try{
      const question =  await Question.find();
      res.json(question)
    }catch(err){
        console.log(err.message)
    }
}
exports.insertQuestion = async(req, res) => {
    try {
  
     await Question.insertMany({ question:question, answers:answers })
      res.json({ msg: "Data saved successfully" });
  }catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
exports.Delete = (req,res) => {
    res.json("questions api to delete")
}

exports.getResult = (req,res) => {
    res.json("result api get request")
}
exports.storeResult = (req,res) => {
    res.json("add new results")
}
exports.dropResult = (req,res) => {
    res.json("questions api to delete")
}
