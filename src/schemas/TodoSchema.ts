import mongoose from 'mongoose';
import UserSchema from './UserSchema';
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: { type:String, required: "Todo title is required"},
    description: { type:String },
    dueDate: { type:Date, required: "Todo due date is required"},
    creator: { type: mongoose.Schema.Types.ObjectId, ref: UserSchema, required: true }
    },
    {
        timestamps: true
    }
);
export default TodoSchema;