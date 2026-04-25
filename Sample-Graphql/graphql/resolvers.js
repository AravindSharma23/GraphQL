import {gql} from 'apollo-server';
import Article from '../model/article.js';
const resolvers = {
    Query:{
    articles : async()=>{return await Article.find({})},
    article : async(parent,args)=>{ return await Article.findById(args.id)}
    },
    Mutation :{
        createArticle : (parent,args)=>{
            let article = new Article(args.articleInput)
            return article.save()
        },
        updateArticle : async(parent,args)=>{
          const updated= await Article.findByIdAndUpdate(args.id,args.articleInput,{ returnDocument: 'after' })
          return updated;
        },
        deleteArticle :async(parent,args)=>{
            const latest = await Article.findByIdAndDelete(args.id);
            return latest;
        }
    }
}

export default resolvers;