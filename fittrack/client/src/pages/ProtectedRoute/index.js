import React from 'react'
import GetDiet from "../../utils/GetDiet";
import Card from '../../components/Card/index'
import Card1 from '../../components/Card1/index'
import Card2 from '../../components/Card2/index'
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
	}
	componentDidMount() {
		this.loadLunch();
		this.loadBreakfast();
		this.loadDinner();
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
	
	render() {
		return (
			<div>
			
			<Card1 image1 ={this.state.image1} />
			<h1>{this.state.label1}</h1>
			<p>{this.state.ingredients1}</p>
			<br></br>
			<Card image={this.state.image} />
			<h1>{this.state.label}</h1>
			<p>{this.state.ingredients}</p>
			<br></br>
			<Card2 image2 ={this.state.image2} />
			<h1>{this.state.label2}</h1>
			<p>{this.state.ingredients2}</p>
			
			</div>
		)
	}
}

export default ProtectedRoute