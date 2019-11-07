import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
    saveRecipe: function(recipeData) {
      console.log("API")
        return axios.post("/api/users/recipe", recipeData);
      }
}