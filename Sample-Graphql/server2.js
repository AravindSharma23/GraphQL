import mongoose from "mongoose";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";
import { ApolloServer } from "apollo-server";

const PORT = 4000;
const URL = 'mongodb://127.0.0.1:27017/my_local_db' //'mongodb://localhost:27017/my_local_db';
mongoose.connect(URL);
mongoose.connection.on('open',()=>{
    console.log("Database Connection is successful");
    
})
mongoose.connection.on('error',()=>{
    console.log("Error while connecting database");
    
})

const server = new ApolloServer({typeDefs,resolvers});

server.listen(PORT).then(({url})=>{
    console.log(`Server listening at ${url}`);
})