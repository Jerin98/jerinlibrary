const express = require('express');

const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title: 'Tom and jerry',
            author: 'Joseph barbera',
            genre: 'Cartoon',
            img: "tj.jpg"
        },
        {
            title: 'Harry Potter',
            author: 'J.K rowling',
            genre: 'Fantasy',
            img: "harry.jpg"
        },
        {
            title: 'The jungle book',
            author: 'Rudyard kipling',
            genre: 'Cartoon',
            img: "jg.jpg"
        },
        {
            title: 'A tale of two cities',
            author: 'Charles Dickens',
            genre: 'Novel',
            img: "city.jpg"
        }
    ]
    
    booksRouter.get('/',function(req,res){
    res.render("books",{
        nav,
        title:'Library',
        books
    });
    });
    
    booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render('book',{
        nav,
         title:'Library',
         book: books[id]
    });
    });

    return booksRouter;
    
}

module.exports = router;