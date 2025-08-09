//Establish env
import dotenv from 'dotenv';
dotenv.config();

//import express
import express from 'express';
import cors from 'cors';

//import db connection
import connectDB from './config/database.js';
import authRouter from './config/authorize.js';
import loginRouter from './routes/login.js';
import registerRouter from './routes/register.js';
//create a express app
const app = express();
app.use(cors());
app.use(express.json());
//connect to database
connectDB();

app.use('/api', loginRouter);
app.use('/api', registerRouter);

app.use('/api', authRouter);
// define a port for running server
const PORT = process.env.PORT || 5000;

// define the port to listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})