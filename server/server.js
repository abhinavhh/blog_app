//Establish env
import dotenv from 'dotenv';
dotenv.config();

//import express
import express from 'express';

//import db connection
import connectDB from './config/database.js';

//create a express app
const app = express();

//connect to database
connectDB();

// define a port for running server
const PORT = process.env.PORT || 3000;

// define the port to listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})