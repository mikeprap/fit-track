import React from 'react'
import GetYoutube from "../../utils/API";
import Card from '../../components/Card/index'
import Card1 from '../../components/Card1/index'
import Card2 from '../../components/Card2/index'
import Jumbotron2 from '../../components/Jumbotron2';
import YouTube from 'react-youtube';
import SideMenu from '../../components/Menu';
import BreakfastCard from "../../components/BreakfastCard/index"
import BreakfastCard1 from "../../components/BreakfastCard1/index"
import Row from '../../components/Grid';
import Col from '../../components/Grid'

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
		
	}
	componentDidMount() {
		
		this.loadBreakfast();
		this.loadBreakfast1();
		this.loadBreakfast2();
		
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
	loadBreakfast1 = () => {
		fetch("https://api.edamam.com/search?q=eggs&app_id=$8461c4d2&app_key=$9e1260eb6b88a84e3b538584b38b0ecc&from=0&to=5&calories=600&diet=low-carb")
			.then(res => {
				return res.json()
			}).then(data => {
				this.setState({
					image: data.hits[0].recipe.image,
					label: data.hits[0].recipe.label,
					ingredients: data.hits[0].recipe.ingredientLines,

				})
			})
			.catch(err => console.log(err));
	};
	loadBreakfast2 = () => {
		fetch("https://api.edamam.com/search?q=oatmeal&app_id=$8461c4d2&app_key=$9e1260eb6b88a84e3b538584b38b0ecc&from=0&to=5&calories=300&mealType=Breakfast")
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
				<SideMenu/>
                </Row>
                <Row>
                    <Col>
					<Card1 image1={this.state.image1}
						label1={this.state.label1}
						ingredients1={this.state.ingredients1} />
                        </Col>
                        <Col>
					<BreakfastCard image={this.state.image}
						label={this.state.label}
						ingredients={this.state.ingredients} />
                        </Col>
                        <Col>
						<BreakfastCard1 image={this.state.image2}
						label={this.state.label2}
						ingredients={this.state.ingredients2} />
                        </Col>
					



					
                    </Row>
					

				

				</div>




			</div>
		)
	}
}

export default Breakfast