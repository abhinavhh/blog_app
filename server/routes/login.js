import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

router.post('/auth/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {

        const user = await User.findOne({ username }).select('+password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({userId: user._id, username: user.username, role: user.role},process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({ message: 'Login successful', token });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})
export default router;