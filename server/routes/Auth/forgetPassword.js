import express from "express";
import User from "../../models/user.js";
import { clearExpiredOtps, saveOtp } from "./otpStoreAndVerify.js";
const forgetPasswordRouter = express.Router();

forgetPasswordRouter.post('/auth/forget-password', async(req, res) => {
    const { email } = req.body;

    try {

        const user = await User.findOne({ email });
        if(!user) {
            return res.status(404).json({ message: 'User not found for the provided email'});
        }

        // Generate OTP and send it to the user's email
        const otp = Math.floor(100000 + Math.random() * 900000);

        // Here you would typically send the OTP to the user's email address
        // setup nodemailer transporter

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // save otp in a temporary storage but not in the database
        const err = saveOtp(email, otp);
        clearExpiredOtps();


        if (err) {
            return res.status(500).json({ message: 'Resend limit exceeded, please try again Later'});
        }

         const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset OTP',
            text: `Your OTP for password reset is: ${otp}. It is valis for 5 minutes.`,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'OTP has been sent to your email address'});
        
    }
    catch (error) {
        console.error('Forget password error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})
export default forgetPasswordRouter;