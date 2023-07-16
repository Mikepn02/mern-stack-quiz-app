const Question = require('../models/questionSchema');
const {question , answers} = require('../connection/data')
const Result = require('../models/resultSchema')


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
  
     const data = await Question.insertMany({ question:question, answers:answers })
      res.status(201).json({
        data: {
            data: data
        }
      })
  }catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
exports.Delete = async(req,res) => {
     try{
        await Question.deleteMany();

        res.status(204).json({
            data:null
        })
     }catch(err){
        console.log("error: ",err.message)
     }
}

exports.getResult = async(req,res) => {
     try{
    //   const result = await Result.findById(req.params.id)
    const result = await Result.find();
      res.status(200).json({
        data:{
             result
        }
      })
     }catch(err) {
        res.status(404).json({
            error: err.message
          })
     }
}
exports.storeResult = (req,res) => {
     try{
       const {username,result,attempts,points,achieved} = req.body;
       if(!username && result) throw new Error('Data not Provided.... !');

       const results = Result.create({username,result,attempts,points,achieved});
       res.status(201).json({
          data : {
             message: "Data inserted successfully"
          }
       })
     }catch(err) {
        res.status(404).json({
            error: err.message
        })
     }
}
exports.dropResult =  async(req,res) => {
    try{
        await Result.deleteMany();

        res.status(204).json({
            message: "Result deleted successfully....!",
            data: null
        })
     }catch(err){
        console.log("error: ",err.message)
     }
}
