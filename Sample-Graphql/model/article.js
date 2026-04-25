import {Schema,model} from 'mongoose';

const articleSchema = new Schema({
    title:{
        type : String,
        require : true
    },
    content :{
        type : String,
        require : true
    }
})
const Article = model('Article',articleSchema);
export default Article;