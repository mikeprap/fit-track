const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Recipe = new Schema({
    name:String,
    recipeName:String,
    photo:String,
    ingredients:String,
    intructions:String
});



let Recipes = mongoose.model('Recipes', Recipe);


module.exports = Recipes
