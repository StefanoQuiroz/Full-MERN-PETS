const mongoose = require('mongoose');
const DB = process.env.DB;

const connectDB = async() => {
    try{
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`2 : Conexión establecida con la base de datos`)
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;