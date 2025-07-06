require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    try{
        mongoose.connect(process.env.MONGODB_URI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            bufferCommands: false,
            retryWrites: true,
            retryReads: true,
            heartbeatFrequencyMS: 10000,
            minPoolSize: 1,
            maxIdleTimeMS: 30000,
            connectTimeoutMS: 10000,
            family: 4,
        });
        console.log('Mongodb conneted');

        mongoose.connection.on('conneted', () => {
            console.log('Mongoose connected to mongoDb');
        });

        mongoose.connection.on('error', (err) => {
            console.error('Mongoose connection error', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose disconnected from Mongodb');
        });


    }
    catch(error){
        console.log('Error connecting to MongoDb: ', error);
    }
}

module.exports = connectDB;