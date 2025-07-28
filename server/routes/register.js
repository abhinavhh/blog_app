import User from './models/User.js';

const registerRouter = require('express').Router();

registerRouter.post('/register', async (req, res) => {

    const { username, password, email } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const newUser = new User({
            username,
            password,
            email
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})