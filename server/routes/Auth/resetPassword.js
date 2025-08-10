import express from 'express';
import User from '../../models/user.js';

const resetPasswordRouter = express.Router();

resetPasswordRouter.put('/auth/reset-password', async(req, res) => {
    const {password, email} = req.body;

    try {
        if (!password || !email) {
            return res.status(400).json({message: 'Failed to read usermail or password'});
        }

        if( password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 character long'});
        }
        else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return res.status(400).json({
                message: 'Password must contain at least one uppercase letter, one lowercase letter, one special symbol, and one number'
            });
        }


        // Here you would typically update the user's password in the database
        // For demonstration, we will just return a success message
        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).json({message: 'User not found'});
        }
        const samePass = await user.comparePassword(password);
        if(samePass) {
            return res.status(400).json({message: 'New password cannot be the same as the old password'});
        }
        user.password = password;
        await user.save();
        return res.status(200).json({message: 'Password reset successfully'});
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).json({message: 'server error'});
    }
})
export default resetPasswordRouter;