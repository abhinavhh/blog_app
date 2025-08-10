import express from 'express';
import User from '../../models/user.js';
const verifyOtpRouter = express.Router();

verifyOtpRouter.post('/auth/verify-otp', async (req, res) => {

    const { otp, email } = req.body;

    try {
        if (!otp || ! email) {
            return res.status(400).json({message: 'No data provided'});
        }
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(404).json({ message: 'Error in verifying user try again'});
        }
        if(otp != user.otp) {
            return res.status(400).json({
                message: 'Invalid OTP, please try again'
            })
        }

        else if( otp == user.otp) {
            if( new Date() > user.otpExpires) {
                return res.status(400).json({
                    message: 'OTP has expired, please request a new one'
                })
            }
            else {
                user.otp = "";
                user.otpExpires = null;
                await user.save();
                return res.status(200).json({
                    message: 'OTP verified successfully'
                });
            }
        }
        
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).json({message: 'Server error'});
    }
})
export default verifyOtpRouter;