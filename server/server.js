//Establish env
import dotenv from 'dotenv';
dotenv.config();

import login from './routes/login.js';
//import express
import express from 'express';
import cors from 'cors';

//import db connection
import connectDB from './config/database.js';

//create a express app
const app = express();
app.use(cors());
app.use(express.json());
//connect to database
connectDB();

app.use('/api', login);

// define a port for running server
const PORT = process.env.PORT || 5000;

// define the port to listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})