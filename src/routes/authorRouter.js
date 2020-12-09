const express = require('express');

const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
            title: 'Rudyard Kipling',
            country:'British',
            field: 'Cartoon',
            img: "rk.jpg"
        },
        {
            title: 'J.K Rowling',
            country:'British',
            field: 'Fantasy',
            img: "jk.jpg"
        },
        {
            title: 'Basheer',
            country:'India',
            field: 'Novelist',
            img: "basheer.jpg"
        },
        {
            title: 'Charles Dickens',
            country:'U.K',
            field: 'Novelist',
            img: "cc.jpg"
        }
    ]
    
    authorsRouter.get('/',function(req,res){
    res.render("authors",{
        nav,
        title:'Library',
        authors
    });
    });
    
    authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render('author',{
        nav,
         title:'Library',
         author: authors[id]
    });
    });

    return authorsRouter;
    
}

module.exports = router;