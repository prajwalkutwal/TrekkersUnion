const expr= require('express');
const app=expr();
const port= 8066;
const path=require('path');

app.listen(port,flistner);

function flistner(err){
    if(err){
        console.log(`Error:  ${err}`); ///// This is interpolation
        return;
    }
    console.log(`Server is listening on port ${port}`);
}
