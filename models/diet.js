const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Recipe = new Schema({
    name:String,
    recipeName:String,
    photo:String,
    ingredients:String,
    instructions:String
});

module.exports = mongoose.model('recipes', Recipe);
