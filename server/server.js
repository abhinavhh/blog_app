//Establish env
import dotenv from 'dotenv';
dotenv.config();

import testUser from './routes/testUser.js';
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

app.use('/api', testUser);

// define a port for running server
const PORT = process.env.PORT || 3000;

// define the port to listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})