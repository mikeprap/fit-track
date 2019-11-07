import React from 'react'
import API from "../../utils/API"
import { Input, TextArea, FormBtn } from "../Form1";
import Jumbotron from '../Jumbotron';
import { Link } from "react-router-dom";


class RecipeForm extends React.Component {
    // refs
    state= {
	recipe: [],
    name:"",
    recipeName:"",
    photo:"",
    ingredients:"",
    instructions:""
	}
	componentDidMount() {
		this.loadRecipe();
	  }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
	  };
	  loadRecipe = () => {
		API.getRecipe()
		  .then(res =>
			this.setState({ recipe: res.data, name: "", recipeName: "", photo: "", ingredients: "",
		instructions:"" })
		  )
		  .catch(err => console.log(err));
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
		  	.then(data => this.loadrecipe())
			.catch(err => console.log(err));
        
      };

	render() {
		

		return (
            <div>
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
						placeholder='Enter Your Height' />
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
						placeholder='Put instructions here' />
					</div>
				</div>
				<FormBtn className="button is-rounded is-dark" onClick={this.handleFormSubmit} type='submit'Submit/>
				
			</form>
			<jumbotron>
			{this.state.recipe.length ? (
              <list>
                {this.state.recipe.map(recipe => (
                  <li key={recipe._id}>
                    <Link to={"/recipe/" + recipe._id}>
                      <strong>
                        {recipe.name} recipe {recipe.recipeName} {recipe.photo} {recipe.ingredients} {recipe.instructions}
                      </strong>
                    </Link>
                    
                  </li>
                ))}
              </list>
            ) : (
              <h3>No Results to Display</h3>
            )}
			</jumbotron>
            </div>

		)
	}
}

export default RecipeForm