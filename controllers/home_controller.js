//Specifying the action names here for the controller
// .home is an action name


module.exports.home=function(req,res){
    return res.end('<p>Hello there this is from home_controller</p>');

}