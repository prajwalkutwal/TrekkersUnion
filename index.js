const expr= require('express');
const app=expr();
const port= 8066;
const path=require('path');

//adding layout which defines the structure of the webpage 
//make sure to npm install express-ejs-layouts

const expreLayout=require('express-ejs-layouts');
//use the layout
app.use(expreLayout);
app.use(expr.static('./assets'));

//to extreact the styles and scripts for the particular views
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//here we will use routes from express router
app.use('/',require('./routes'));

//Setting up the view
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,flistner);

function flistner(err){
    if(err){
        console.log(`Error:  ${err}`); ///// This is interpolation
        return;
    }
    console.log(`Server is listening on port ${port}`);
}
