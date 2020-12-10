const express = require('express');
const newbooksRouter = express.Router();
function router(nav){

newbooksRouter.get('/',function(req,res){
    res.render("addbook",
    {
        nav,
        title:'Books'
    });
});

return newbooksRouter;
}
module.exports = router;
