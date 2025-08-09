
import express from 'express';
const registerRouter = express.Router();
import User from '../models/user.js';

registerRouter.post('/auth/register', async (req, res) => {

    const { username, password, email } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const existingMail = await User.findOne({ email});
        if (existingMail) {
            return res.status(400).json({ message: 'Email already exists'});
        }

        // check password security and length
        if( password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 character long'});
        }
        else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return res.status(400).json({
                message: 'Password must contain at least one uppercase letter, one lowercase letter, one special symbol, and one number'
            });
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
});
export default registerRouter;