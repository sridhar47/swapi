/**
 * PlanetsController
 *
 * @description :: Server-side logic for managing planets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add: function(req, res){
		var docs = req.body;
		if(!Array.isArray(docs)){
			docs = [docs];
		}
		Planets.add(docs, function(err, response){
			if(!err){
				res.json(response)
			}else{
				res.json(err)
			}
		});
	},
	listOfPlanets: function(req, res){
		Planets.listOfPeople(function(err, response){
			if(!err){
				res.json(response)
			}else{
				res.json(err)
			}
		});
	},
	getDetails: function(req, res){
		var planetId = req.param('planetId');
		Planets.getDetails(planetId, function(err, planet){
			if(!err){
				res.json(planet)
			}else{
				res.json(err)
			}
		});
	}
};

