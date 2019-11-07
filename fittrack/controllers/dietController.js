const db = require ("../models/diet")


   module.exports= {
       
    newRecipe: function(req, res){
        db.Recipes
        .create(req.body)
        .then(function(recipes){
            res.json(recipes)
        })
        .catch(function(err){
            res.json(err)
        })
    }
   }
    