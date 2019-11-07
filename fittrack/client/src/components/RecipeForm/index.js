import React from 'react'
import API from "../../utils/API"
import { Input, TextArea, FormBtn } from "../Form1";
import SideMenu from '../Menu';
import Row from '../Grid'
import './style.css'


class RecipeForm extends React.Component {
    // refs
    state= {
    name:"",
    recipeName:"",
    photo:"",
    ingredients:"",
    instructions:""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
	  };
	  
      handleFormSubmit = event => {
		event.preventDefault();
		
		console.log(this.state.name)
        
          API.saveRecipe({
            name: this.state.name,
            recipeName: this.state.recipeName,
            photo: this.state.photo,
            ingredients: this.state.ingredients,
			instructions: this.state.instructions
		
		  })
		  	.then(data => console.log(data))
			.catch(err => console.log(err));
        
      };

	render() {
		

		return (
            <div>
				<Row>
				<SideMenu/>
				</Row>
			<form>
				
			
				<div className="field">
					<label className="label">Name</label>
					<div className="control">
						<Input 
						className="input" 
						value={this.state.name} 
						onChange={this.handleInputChange} 
						type='text' 
						name="name" 
						placeholder='Enter Name' />
					</div>
				</div>
				<div className="field">
					<label className="label">Dish Name</label>
					<div className="control">
						<Input 
						className="input" 
						value={this.state.recipeName} 
						onChange={this.handleInputChange} 
						type='tex' 
						name="recipeName" 
						placeholder='Enter Your Recipe Name' />
					</div>
				</div>
				<div className="field">
					<label className="label">Photo</label>
					<div className="control">
						<Input 
						className="input" 
						value={this.state.photo} 
						onChange={this.handleInputChange} 
						type='text' 
						name="photo" 
						placeholder='Enter a photo link of your recipe' />
					</div>
				</div>
				<div className="field">
					<label className="label">Ingredients</label>
					<div className="control">
						<Input 
						className="input" 
						value={this.state.ingredients} 
						onChange={this.handleInputChange} 
						type='text' 
						name="ingredients" 
						placeholder='Enter The Ingredients For Your Recipe' />
					</div>
				</div>
				<div className="field">
					<label className="label">Instructions</label>
					<div className="control">
						<Input 
						className="input" 
						value={this.state.instructions} 
						onChange={this.handleInputChange} 
						type='text' 
						name="instructions" 
						placeholder='Enter Cooking Instructions' />
					</div>
				</div>
				<button className="button is-rounded is-dark" onClick={this.handleFormSubmit} type='submit'>Submit</button>
				{/* <FormBtn className="button is-rounded is-dark" onClick={this.handleFormSubmit} type='submit'>Submit</FormBtn> */}
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
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</form>
            </div>

		)
	}
}

export default RecipeForm