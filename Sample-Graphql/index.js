//Base Graphql server

import {ApolloServer,gql} from 'apollo-server';

const PORT = 3000;

const typeDefs = gql `
type Query{
  hello : String
}`

const resolvers = {
    Query :{
        hello : ()=>{return 'Hello Welcome to Graphql!'}
    }
}

const server = new ApolloServer({typeDefs,resolvers})

server.listen(PORT).then(({url})=>{
    console.log(`Server listening at ${url}`);
    
})