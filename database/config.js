const mongoose = require('mongoose');

const dbConnection = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to database");
    } catch (error) {
        throw new Error("Couldn't connect to database")
    }
}

module.exports = {
    dbConnection
}