import mongoose from 'mongoose';
import TodoSchema from "src/schemas/TodoSchema";
const Todo = mongoose.model('Todo', TodoSchema);
export default Todo;
