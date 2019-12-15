import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: { type:String, required: "Username is required", trim: true},
        firstName: { type:String, required: "First name is required", trim: true},
        lastName: { type:String, required: "Last name is required", trim: true},
        password: { type:String, required: "Password is required", trim: true},
        mobilePhone: { type:String, required: "Mobile phone is required", trim: true},
        lastLoginDate: { type:Date },
        tokens: [{
            token: {type: String, required:true }
        }]
    },
    {
        timestamps:true
    }
);
export default UserSchema;
