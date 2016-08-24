/**
 * People.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	
  },

 findNcreate: function(Collection, docs, cb){
 	if(!Array.isArray(docs)){
		docs = [docs];
	}
 	Collection.native(function(err, collection){
 		if(!err){
 			var result = {};
 				result.exitDocuments = [];
 				result.createdDocuments = [];
 			for (var i = 0; i < docs.length; i++) {
 				var fn = (function(item){
 					return function(){
 						collection.find(item).toArray(function(err, resItem){
		 					if(!err){
		 						if(resItem && resItem.length > 0){
		 							result.exitDocuments.push(resItem[0]);
		 							if(docs.length == (result.exitDocuments.length + result.createdDocuments.length)){
		 								cb(result);
		 							}
		 						}else{
		 							collection.insertOne(item, function(err, createdItem){
		 								console.log('createdItem', createdItem)
		 								if(!err){
		 									result.createdDocuments.push(createdItem.ops[0]);
		 									if(docs.length == (result.exitDocuments.length + result.createdDocuments.length)){
				 								cb(result);
				 							}	
		 								}
		 							});
		 						}
		 					}
		 				});
 					}
 				})(docs[i])
 				fn()
 			}
 		}
 	});
 },

  add: function(docs, cb){
  	sails.models.people.findNcreate(People, docs, function(result){
  		cb(null, result)
  	});
  },

  listOfPeople: function(cb){
  	People.native(function(err, collection){
  		if(!err){
  			var options = {
  				name: true,
  				height: true,
  				mass: true,
  				skin_color: true,
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

  getDetails: function(peopleId, cb){
  	People.native(function(err, collection){
  		if(!err){
  			collection.findOne({},{}, {id: peopleId}, function(error, planetDetails){
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

