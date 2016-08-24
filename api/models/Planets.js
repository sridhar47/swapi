/**
 * Planets.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  },

  add: function(docs, cb){
  	sails.models.people.findNcreate(Planets, docs, function(result){
  		cb(null, result)
  	});
  },

  listOfPeople: function(cb){
  	Planets.native(function(err, collection){
  		if(!err){
  			var options = {
  				name: true,
  				rotation_period: true,
  				orbital_period: true,
  				diameter: true,
  				terrain: true,
  				surface_water: true,
  				climate: true,
  				population: true
  			}
  			collection.find({}, options).toArray(function (err, results) {
			    if (err){
			    	cb(err)
			    }else{
			    	cb(null, results)
			    }
			  });
  		}
  	});
  },

  getDetails: function(planetId, cb){
  	Planets.native(function(err, collection){
  		if(!err){
  			collection.findOne({},{}, {id: planetId}, function(error, planetDetails){
  				if(!error){
  					cb(null, planetDetails);
  				}else{
  					cb(error)
  				}
  			});
  		}else{
  			cb(err)
  		}
  	});
  }

};

