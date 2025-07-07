require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
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

        function getDbConnectionStatus() {
            const state = mongoose.connection.readyState;
            const stateName = mongoose.STATES[state];
            console.log(`Connection state : ${stateName}`);
            
            return {
                state: state,
                stateName: stateName,
                isConnected: state === 1
            };
        }
        getDbConnectionStatus();

        setTimeout(() => {
            getDbConnectionStatus();
        }, 5000)

    }
    catch(error){
        console.log('Error connecting to MongoDb: ', error);
    }
}

module.exports = connectDB;