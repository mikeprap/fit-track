import React from 'react'
import API from "../../utils/API";
import Card from '../../components/Card'
/*ToDo*/
/**
 * Let's get some styling in here
 */

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class ProtectedRoute extends React.Component {
	state= {
		image:""
	}
	componentDidMount() {
		this.loadDiet();
	  }
	loadDiet = () => {
		API.getDiet()
		  .then(res =>
			this.setState({
			  image: res.hits.recipe.image
			})
		  )
		  .catch(err => console.log(err));
	  };
	
	render() {
		return (
			<div>
			<Card image={this.state.image} />
			<h3>This is a Protected Route, You must log in to see this page.</h3>,	
			<h3>hello</h3>
			</div>
		)
	}
}

export default ProtectedRoute