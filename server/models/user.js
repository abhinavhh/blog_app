import mongoose from "mongoose";

// imnpor bcrypt for password hashing and comparison
import bcrypt from 'bcrypt';

// Define the User schema
const userSchema = new mongoose.Schema({
    username: {
        unique: true,
        type: String,
        required: true,
        trim: true,
        minLength: 3
    },
    email: {
        unique: true,
        type: String,
        required: true,
        trim: true,
        match: /.+\@.+\..+/,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        select: false,
        trim: true,
    },
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    },
    otp: {
        type: String,
        select: false,
    },
    otpExpires: {
        type: Date,
        select: false,
    }
}, { timestamps: true });

// --Security : -- Store password in hashed format
userSchema.pre('save', async function(next) {
    // hash password if it has been modified or is new
    if(!this.isModified('password')) {
        return next();
    }

    try{
        // create a salt and hash the password
        const salt = await bcrypt.genSalt(10); // 10 is the salt rounds
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
    catch (err) {
        console.error('Error hashing password: ', err)
    }
})

// --Secuirity : -- Compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    }
    catch (err) {
        console.error('Error comparing password: ', err);
        return false;
    }
}

const User = mongoose.model('User', userSchema);
export default User;