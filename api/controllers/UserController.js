/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	signup: function(req, res){
		var doc = req.body;
		User.signup(doc, function(err, response){
			if(!err){
				res.json(response)
			}else{
				console.log(err)
			}
		});
	}
};

