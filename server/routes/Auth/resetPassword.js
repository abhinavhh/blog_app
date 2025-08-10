import express from 'express';

const resetPasswordRouter = express.Router();

resetPasswordRouter.put('/auth/reset-password', async(req, res) => {
    const {password, email} = req.body;

    try {
        if (!password || !email) {
            return res.status(400).json({message: 'Both Password and Email is  required'});
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
        return res.status(200).json({message: 'Password reset successfully'});
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).json({message: 'server error'});
    }
})
export default resetPasswordRouter;