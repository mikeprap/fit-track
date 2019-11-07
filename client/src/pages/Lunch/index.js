import React from 'react'
import GetYoutube from "../../utils/API";
import Card from '../../components/Card/index'
import Card1 from '../../components/Card1/index'
import Card2 from '../../components/Card2/index'
import Jumbotron2 from '../../components/Jumbotron2';
import YouTube from 'react-youtube';
import SideMenu from '../../components/Menu';
import Row from '../../components/Grid';
import Col from '../../components/Grid';
import LunchCard from '../../components/LunchCard/index'
import LunchCard1 from '../../components/LunchCard1'

/*ToDo*/
/**
 * Let's get some styling in here
 */

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class ProtectedRoute extends React.Component {
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
		this.loadLunch();
		this.loadLunch1();
		this.loadLunch2();
		
	}
	
	loadLunch = () => {
		fetch("https://api.edamam.com/search?q=chicken&app_id=$8461c4d2&app_key=$9e1260eb6b88a84e3b538584b38b0ecc&from=0&to=10&calories=600&diet=low-carb&diet=high-protein&yield=1")
			.then(res => {
				return res.json()
			}).then(data => {
				this.setState({
					image: data.hits[1].recipe.image,
					label: data.hits[1].recipe.label,
					ingredients: data.hits[1].recipe.ingredientLines,

				})
			})
			.catch(err => console.log(err));
	};
	loadLunch1 = () => {
		fetch("https://api.edamam.com/search?q=salmon&app_id=$8461c4d2&app_key=$9e1260eb6b88a84e3b538584b38b0ecc&from=0&to=20&calories=600&mealType=Lunch")
			.then(res => {
				return res.json()
			}).then(data => {
				this.setState({
					image1: data.hits[17].recipe.image,
					label1: data.hits[17].recipe.label,
					ingredients1: data.hits[17].recipe.ingredientLines,

				})
			})
			.catch(err => console.log(err));
	};
	loadLunch2 = () => {
		fetch("https://api.edamam.com/search?q=salad&app_id=$8461c4d2&app_key=$9e1260eb6b88a84e3b538584b38b0ecc&from=0&to=20&calories=600&mealType=Lunch")
			.then(res => {
				return res.json()
			}).then(data => {
				this.setState({
					image2: data.hits[2].recipe.image,
					label2: data.hits[2].recipe.label,
					ingredients2: data.hits[2].recipe.ingredientLines,

				})
			})
			.catch(err => console.log(err));
	};
	


	render() {
		
		return (
			<div>
				<div>
					<Row>
						<SideMenu />
					</Row>
					<Row>
						<Col>
							<LunchCard image1={this.state.image1}
								label1={this.state.label1}
								ingredients1={this.state.ingredients1} />

						</Col>
						<br></br>
						<Col>
							<Card image={this.state.image}
								label={this.state.label}
								ingredients={this.state.ingredients} />
						</Col>

						<br></br>
						<Col>
							<LunchCard1
								image2={this.state.image2}
								label2={this.state.label2}
								ingredients2={this.state.ingredients2} />
						</Col>
					</Row>

					
				</div>




			</div>
		)
	}
}

export default ProtectedRoute