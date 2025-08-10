import express from 'express';
import { verifyOTP } from './otpStoreAndVerify.js';
const verifyOtpRouter = express.Router();

verifyOtpRouter.post('/auth/verify', async (req, res) => {

    const { otp, email } = req.body;

    try {
        if (!otp || ! email) {
            return res.status(400).json({message: 'OTP and email are required'});
        }

        const result = verifyOTP(email, otp);
        if(!result) {
            return res.status(400).json({message: 'Inavlid or expired OTP'});
        }

        return res.status(200).json({message: 'OTP verified successfully'});
        
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).json({message: 'Server error'});
    }
})
export default verifyOtpRouter;