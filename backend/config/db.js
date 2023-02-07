require('dotenv').config();
const mongooose = require('mongoose');

const connectDB = async() => {
    try{
        await mongooose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connection SUCCESS");
    } catch(error){

        console.error("MongoDB connection FAIL");
        process.exit(1);

    }
}

module.exports = connectDB;