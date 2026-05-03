import mongoose from "mongoose";
import {model,Schema} from 'mongoose';

const todoSchema = new Schema({
    title:{
        type : String,
        required:true
    },
    detail :{
        type :String,
        required : true
    },
    date :Date
},{timestamps:true});

const Todo = model("Todo",todoSchema);
export default Todo;