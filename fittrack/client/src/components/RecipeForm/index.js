import React from 'react'
import API from "../../utils/API"


class RecipeForm extends React.Component {
    // refs
    state= {
    name:"",
    recipeName:"",
    photo:"",
    ingredients:"",
    intructions:""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      handleFormSubmit = event => {
        event.preventDefault();
        
          API.saveRecipe({
            name: this.state.title,
            recipeName: this.state.author,
            photo: this.state.synopsis,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions
          })
            
            .catch(err => console.log(err));
        
      };

	render() {
		

		return (
            <div>
			<form>
				
			
				<div className="field">
					<label className="label">Name</label>
					<div className="control">
						<input className="input" value={this.state.name} onChange={this.handleInputChange} type='text' name="name" placeholder='Enter name' />
					</div>
				</div>
				<div className="field">
					<label className="label">Dish Name</label>
					<div className="control">
						<input className="input" value={this.state.recipeName} onChange={this.handleInputChange} type='tex' name="recipeName" placeholder='Enter Your Recipe name' />
					</div>
				</div>
				<div className="field">
					<label className="label">Photo</label>
					<div className="control">
						<input className="input" value={this.state.photo} onChange={this.handleInputChange} type='text' name="photo" placeholder='Enter a photo link of your recipe' />
					</div>
				</div>
				<div className="field">
					<label className="label">Ingredients</label>
					<div className="control">
						<input className="input" value={this.state.ingredients} onChange={this.handleInputChange} type='text' name="ingredients" placeholder='Enter Your Height' />
					</div>
				</div>
				<div className="field">
					<label className="label">Instructions</label>
					<div className="control">
						<input className="input" value={this.state.instructions} onChange={this.handleInputChange} type='text' name="instructions" placeholder='Put instructions here' />
					</div>
				</div>
				<button className="button is-rounded is-dark" onClick={this.handleFormSubmit} type='submit'>Submit</button>
				{/* <div className="form-group">
					<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' /><br />
					<input className="form-control" ref={(input) => this.ageElem = input} type='number' name="age" placeholder='Enter Your Age' /><br />
					<input className="form-control" ref={(input) => this.weightElem = input} type='number' name="weight" placeholder='Enter Your Weight' /><br />
					<input className="form-control" ref={(input) => this.heightElem = input} type='number' name="height" placeholder='Enter Your Height' /><br />
					<input className="form-control" ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' /><br />
					<button className="btn btn btn-primary" type='submit'>Submit</button>
				</div> */}
			</form>
            </div>

		)
	}
}

export default RecipeForm