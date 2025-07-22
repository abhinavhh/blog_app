// import .env essentials
import dotenv from 'dotenv';
dotenv.config();

//import mongoose
import { connect } from 'mongoose';

// connect to MongoDB
const connectDB = async () => {
    try{
        await connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB connected');
    }
    catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
}
export default connectDB;