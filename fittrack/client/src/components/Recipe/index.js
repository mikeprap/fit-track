import React from 'react';
import RecipeForm from "../RecipeForm";
import API from "../../utils/API"
//The component for doing the actual signup of the User
class CreateRecipe extends React.Component {
	register = (data) => {
		fetch('api/recipe', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
		.then((response) => {
			if (response.status === 200) {
				console.log('Succesfully registered user!');
				//relocate to the login page
				window.location.assign("/");
			}
		})
		.catch((err) => {
			console.log('Error registering user.', err);
		});
	}

	render() {
		return (
			<div>
				{/* <h4>Register a New User</h4> */}
				<RecipeForm onRegister={this.register} />
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</div>
		)
	}
}

export default CreateRecipe