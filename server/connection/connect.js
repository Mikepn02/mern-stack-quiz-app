const mongoose =  require('mongoose')

const connect = () => mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log("failed to connect",err.message)
}) 

module.exports = connect