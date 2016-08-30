/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  },

  signup: function(doc, cb){
  	User.findOne({ email: doc.email }).exec(function(err, userExit){
  		if(!err){
  			if(userExit && userExit.email){
  				cb(null, 'Email already exits')
  			}else{
  				console.log(doc)
  				User.create(doc).exec(function(err, user){
  					if(!err){
  						cb(null, user)
  					}
  				});
  			}
  		}else{
  			cb(err)
  		}
  	});
  }

};

