import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getDiet: function() {
    return axios.get("https://api.edamam.com/search?q=chicken&app_id=$8461c4d2&app_key=$9e1260eb6b88a84e3b538584b38b0ecc&from=0&to=3&calories=591-600&diet=low-carb&high-protein");
  },
 
};