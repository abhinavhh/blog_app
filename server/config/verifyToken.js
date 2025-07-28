import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authenticateToken = (req, res, next) => {
    const auth = req.headers['authorization'];
    const token = auth && auth.split(' ')[1]; // Extract token from "Bearer <
    if (!token) {
        return res.status(401).json({ message: 'Access denied, no token provided' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        next();
    });
}
export default authenticateToken;

// Middleware to verify JWT token
