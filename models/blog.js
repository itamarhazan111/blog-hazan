const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const blogSchema=new Schema({
  title:{
    type:String,
    requiree:true,
  },
  snippet:{
    type:String,
    requiree:true,
  },
  body:{
    type:String,
    requiree:true,
  },
},{timestamps:true});
const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;