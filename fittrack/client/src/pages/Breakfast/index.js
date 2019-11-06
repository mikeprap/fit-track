import React from 'react'
import GetYoutube from "../../utils/API";
import Card from '../../components/Card/index'
import Card1 from '../../components/Card1/index'
import Card2 from '../../components/Card2/index'
import Jumbotron2 from '../../components/Jumbotron2';
import YouTube from 'react-youtube';
import SideMenu from '../../components/Menu';

/*ToDo*/
/**
 * Let's get some styling in here
 */

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class Breakfast extends React.Component {
	state = {
		image: "",
		label: "",
		ingredients: "",
		image1: "",
		label1: "",
		ingredients1: "",
		image2: "",
		label2: "",
		ingredients2: "",
		video: "",
	}
	componentDidMount() {
		
		this.loadBreakfast();
		
	}
	
	
	loadBreakfast = () => {
		fetch("https://api.edamam.com/search?q=eggs&app_id=$8461c4d2&app_key=$9e1260eb6b88a84e3b538584b38b0ecc&from=0&to=3&calories=600&diet=low-fat&mealType=Breakfast&diet=low-carb")
			.then(res => {
				return res.json()
			}).then(data => {
				this.setState({
					image1: data.hits[1].recipe.image,
					label1: data.hits[1].recipe.label,
					ingredients1: data.hits[1].recipe.ingredientLines,

				})
			})
			.catch(err => console.log(err));
	};
	loadBreakfast = () => {
		fetch("https://api.edamam.com/search?q=oats&app_id=$8461c4d2&app_key=$9e1260eb6b88a84e3b538584b38b0ecc&from=0&to=3&calories=600&diet=low-fat&mealType=Breakfast&diet=low-carb")
			.then(res => {
				return res.json()
			}).then(data => {
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
				<div>
				<SideMenu/>
					<Card1 image1={this.state.image1}
						label1={this.state.label1}
						ingredients1={this.state.ingredients1} />


					

					
				</div>




			</div>
		)
	}
}

export default Breakfast