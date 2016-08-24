/**
 * PeopleController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add: function(req, res){
		var docs = req.body;
		if(!Array.isArray(docs)){
			docs = [docs];
		}
		People.add(docs, function(err, response){
			if(!err){
				res.json(response)
			}else{
				res.json(err)
			}
		});
	},
	listOfPeople: function(req, res){
		People.listOfPeople(function(err, response){
			if(!err){
				res.json(response)
			}else{
				res.json(err)
			}
		});
	},

	getDetails: function(req, res){
		var peopleId = req.param('peopleId');
		People.getDetails(peopleId, function(err, people){
			if(!err){
				res.json(people)
			}else{
				res.json(err)
			}
		});
	}
};

