const express = require('express');
const app =  express();
const port = process.env.PORT || 5000;
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const newbooksRouter=require('./src/routes/newbookRouter')(nav);
const authorsRouter = require('./src/routes/authorRouter')(nav);
const newauthorRouter=require('./src/routes/newauthorRouter')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
// app.use(express.static('./public'));
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.set('views', './src/views');
app.use('/books',booksRouter);

app.use('/authors',authorsRouter);
app.use('/newauthor',newauthorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/newbook',newbooksRouter);
app.get('/',function(req,res){
    res.render("index",
    {
         nav,
         title:'Library'
    });
    });
app.listen(port,()=>{console.log("Server ready at"+port)});