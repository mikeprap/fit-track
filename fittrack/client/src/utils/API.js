import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

const GetYoutube = (input) => {
    return axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=absworkout&key=AIzaSyCbe0-7OsepLY88Fig1jKT6pfZuXiL2FAo");
  
 
};

export default GetYoutube