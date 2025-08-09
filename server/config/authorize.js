import express from 'express';
const authRouter = express.Router();
import authenticateToken from '../config/verifyToken.js';


authRouter.get('/authorization', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Access granted', user: req.user });
});

export default authRouter;
