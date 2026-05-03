import Todo from "./models/Todo.js";

const resolvers = {
    Query :{
     getTodos : async()=>{
        const todos = await Todo.find();
        return todos;
     },
     getTodo : async(parent,args)=>{
        const todo = await Todo.findById(args.id);
        return todo;
     }
    },
    Mutation:{
        addTodo : async(parent,args)=>{
            const newTodo = new Todo({title:args.title,detail:args.detail,date:args.date});
            await newTodo.save();
            return newTodo;
        },
        deleteTodo : async(parent,args)=>{
            await Todo.findByIdAndDelete(args.id);
            return 'Todo deleted successfully'
        },
        updateTodo : async(parent,args)=>{
            const {title,detail,date,id} = args;
            const updateTodo = {}
            if(title != undefined){
                updateTodo.title = title;
            }
            if(detail != undefined){
                updateTodo.detail = detail;
            }
            if(date != undefined){
                updateTodo.date = date;
            }
            return await Todo.findByIdAndUpdate(updateTodo,{new:true});
        }
    }
}

export default resolvers;