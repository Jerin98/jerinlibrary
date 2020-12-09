const express = require('express');
const newauthorRouter = express.Router();
function router(nav){

newauthorRouter.get('/',function(req,res){
    res.render("addauthor",
    {
        nav,
        title:'Authors'
    });
});
return newauthorRouter;
}
module.exports = router;
