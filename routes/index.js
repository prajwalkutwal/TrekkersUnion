//This is created especially for handling routes and is imported(required in main idex.js file)
//This will be acting like a parent router for all other routes


const expr=require('express');



const router =expr.Router();
console.log("router loaded");
let homeController=require('../controllers/home_controller');

router.get('/',homeController.home);
router.use('/users',require('./users'));

module.exports=router;