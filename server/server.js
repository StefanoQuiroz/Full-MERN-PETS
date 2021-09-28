require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT

//connection to mongoDB
const connectDB = require('./config/mongoDB.config');
connectDB();

//middlewares POST
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//Routes
app.use(`/api`, require(`./routes/pets.routes`));

app.listen(PORT, ()=>{
    console.log(`1 : Servidor ejecutandose en el puerto #: ${PORT}`)
})