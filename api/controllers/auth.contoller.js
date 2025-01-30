import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req,res)=>{
    const {userName, email, password} = req.body;

    if(!userName || !email || !password || userName === '' || email === '' || password === '')
    {
        return res.status(400).json({message: 'All fields are required.'});
    }
    
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        userName,
        email,
        password: hashedPassword
    })
    try {
        await newUser.save();
        return res.status(201).json({messaage: 'Signup successful.'});
    } catch (error) {
        res.status(500).json({message: error.messaage});
    }
    
}