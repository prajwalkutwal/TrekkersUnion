const expr=require('express');


const router =expr.Router();
console.log("router loaded");
let user_Controller=require('../controllers/users');

router.get('/',user_Controller.users);


module.exports=router;