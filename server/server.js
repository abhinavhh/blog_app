// imports and setup

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');

// Database connection

const connectDB = require('./config/database');
const app = express();
connectDB();

// Basic Middleware

app.use(express.json());
app.use(cookieParser());

// Security Enhancement

app.use(helmet());
app.disable('x-powered-by');

// Request Throtting

