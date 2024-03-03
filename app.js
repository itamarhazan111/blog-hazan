const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const blogRouter=require('./routes/blogsRoutes');
// express app
const app=express();

//connect to mongodb
const dbURI='mongodb+srv://itamarhazan456:itamar100@cluster0.2wjkjou.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result=>{app.listen(3000);})
  .catch(err=>{console.log(err)});
//register view engine
app.set('view engine','ejs');



//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// mongoose & mongo tests
  
app.get('/',(req,res)=>{
   res.redirect('/blogs')
});
app.get('/about',(req,res)=>{
  res.render('about',{ title:'About'});
});
app.use('/blogs',blogRouter);

//404-error page
app.use((req,res)=>{
  res.status(404).render('404',{ title:'404' });
});