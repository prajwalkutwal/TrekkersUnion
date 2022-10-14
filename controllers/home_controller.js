//Specifying the action names here for the controller
// .home is an action name


module.exports.home=function(req,res){
    return res.render('home',{val:"prajwalk"});
}