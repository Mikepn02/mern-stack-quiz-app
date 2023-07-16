const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
     question: {
        type: Array,
        default: []
     },
     answers: {
        type: Array,
        default:[]
     },
     createdAt: {
        type:Date,
        default: Date.now()
     }
})
const Question = mongoose.model('Question',questionSchema)
module.exports = Question