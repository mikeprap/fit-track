import React from 'react'
import GetDiet from "../../utils/GetDiet";
import Card from '../../components/Card/index'
/*ToDo*/
/**
 * Let's get some styling in here
 */

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class ProtectedRoute extends React.Component {
	state= {
		image:"",
		label:"",
		ingredients:""
	}
	componentDidMount() {
		this.loadDiet();
	  }
	loadDiet = () => {
		fetch("https://api.edamam.com/search?q=chicken&app_id=$8461c4d2&app_key=$9e1260eb6b88a84e3b538584b38b0ecc&from=0&to=3&calories=591-600&diet=low-carb&high-protein")
		  .then(res =>{
			return res.json()
		  }).then (data =>{
			this.setState({
			  image: data.hits[0].recipe.image,
			  label: data.hits[0].recipe.label,
			  ingredients: data.hits[0].recipe.ingredientLines,

			})
		})
		  .catch(err => console.log(err));
	  };
	
	render() {
		return (
			<div>
			<Card image={this.state.image} />
			<h1>{this.state.label}</h1>
			<p>{this.state.ingredients}</p>
			
			</div>
		)
	}
}

export default ProtectedRoute