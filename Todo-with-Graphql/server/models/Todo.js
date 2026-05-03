import mongoose,{Schema,model} from "mongoose";

const TodoSchema = new Schema({
    title:{
        type:String,
        required : true
    },
    detail:{
        type : String,
        required : true
    },
    date : Date
},{timestamps:true})

const Todo = model('Todo',TodoSchema);
export default Todo;