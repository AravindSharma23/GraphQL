import {ApolloServer} from 'apollo-server-express'
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import resolvers from '../server/resolvers.js';
import typeDefs from '../server/typeDefs.js';
async function initServer(){
    const app = express();

    app.use(cors());
    dotenv.config();

    const apolloServer = new ApolloServer({typeDefs,resolvers});
    await apolloServer.start();

    apolloServer.applyMiddleware({app})
    app.use((req,res)=>{
      res.send('Server started ssuccessfully')
    })
    const PORT = process.env.PORT || 5000;
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        .then(()=>console.log("DB connected"))

    }catch(e){
        console.log("DB Connection Err",e);
        
    }
    app.listen(PORT,()=>{
        console.log(`server running at port ${PORT}`);
        
    })
}

initServer();