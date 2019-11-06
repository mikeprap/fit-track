import React from 'react'
import GetYoutube from "../../utils/API";
import Card from '../../components/Card/index'
import Card1 from '../../components/Card1/index'
import Card2 from '../../components/Card2/index'
import Jumbotron2 from '../../components/Jumbotron2';
import YouTube from 'react-youtube';

/*ToDo*/
/**
 * Let's get some styling in here
 */

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class ProtectedRoute extends React.Component {
	state= {
		image:"",
		label:"",
		ingredients:"",
		image1:"",
		label1:"",
		ingredients1:"",
		image2:"",
		label2:"",
		ingredients2:"",
		video:"",
	}
	componentDidMount() {
		this.loadLunch();
		this.loadBreakfast();
		this.loadDinner();
		this.loadVideo();
	  }
	  loadDinner = () => {
		fetch("https://api.edamam.com/search?q=tilapia&app_id=$8461c4d2&app_key=$9e1260eb6b88a84e3b538584b38b0ecc&from=0&to=5&calories=600&diet=low-fat&mealType=Dinner&diet=low-carb&yield=1")
		  .then(res =>{
			return res.json()
		  }).then (data =>{
			this.setState({
			  image2: data.hits[3].recipe.image,
			  label2: data.hits[3].recipe.label,
			  ingredients2: data.hits[3].recipe.ingredientLines,

			})
		})
		  .catch(err => console.log(err));
	  };
	loadLunch = () => {
		fetch("https://api.edamam.com/search?q=chicken&app_id=$8461c4d2&app_key=$9e1260eb6b88a84e3b538584b38b0ecc&from=0&to=10&calories=600&diet=low-carb&diet=high-protein&yield=1")
		  .then(res =>{
			return res.json()
		  }).then (data =>{
			this.setState({
			  image: data.hits[1].recipe.image,
			  label: data.hits[1].recipe.label,
			  ingredients: data.hits[1].recipe.ingredientLines,

			})
		})
		  .catch(err => console.log(err));
	  };
	  loadBreakfast = () => {
		fetch("https://api.edamam.com/search?q=eggs&app_id=$8461c4d2&app_key=$9e1260eb6b88a84e3b538584b38b0ecc&from=0&to=3&calories=600&diet=low-fat&mealType=Breakfast&diet=low-carb")
		  .then(res =>{
			return res.json()
		  }).then (data =>{
			this.setState({
			  image1: data.hits[1].recipe.image,
			  label1: data.hits[1].recipe.label,
			  ingredients1: data.hits[1].recipe.ingredientLines,

			})
		})
		  .catch(err => console.log(err));
	  };
	  loadVideo = () => {
		  fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=absworkout&key=AIzaSyCbe0-7OsepLY88Fig1jKT6pfZuXiL2FAo")
		  .then(res=>{
			  return res.json()
		  })
		  .then(res =>
			this.setState({
				video: res.items[2].id.videoId
			})
			)

		  
	  }
	  
	
	render() {
		const opts = {
			height: '390',
			width: '640',
			playerVars: { // https://developers.google.com/youtube/player_parameters
			  autoplay: 1
			}
		  };
		return (
			<div>
			<div>
			<Card1 image1 ={this.state.image1}
			label1= {this.state.label1} 
			ingredients1={this.state.ingredients1}/>
			
			
			<br></br>
			<Card image={this.state.image} 
			label= {this.state.label}
			ingredients={this.state.ingredients}/>
			
			
			<br></br>
			<Card2 
			image2 ={this.state.image2} 
			label2 ={this.state.label2}	 
			ingredients2={this.state.ingredients2}/>
			
			<YouTube
        	videoId={this.state.video}
       		opts={opts}
        	onReady={this._onReady}
      />
			</div>
			
			
			
			
			</div>
		)
	}
}

export default ProtectedRoute