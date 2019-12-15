import mongoose from 'mongoose';
import UserSchema from "src/schemas/UserSchema";
const User = mongoose.model('Todo', UserSchema);
export default User;
