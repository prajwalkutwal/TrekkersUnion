//This is created especially for handling routes and is imported(required in main idex.js file)


const expr=require('express');


const router =expr.Router();
console.log("router loaded");
let homeController=require('../controllers/home_controller');

router.get('/',homeController.home);

module.exports=router;