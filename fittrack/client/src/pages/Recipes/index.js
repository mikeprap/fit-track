import React from 'react'
import API from "../../utils/API"



import { Link } from "react-router-dom";

import SideMenu from '../../components/Menu';
import Row from '../../components/Grid'
import Col from '../../components/Grid'
import RecipeCard from '../../components/RecipeCard'




class RecipePage extends React.Component {
    // refs
    state = {
        recipe: [],
        name: "",
        recipeName: "",
        photo: "",
        ingredients: "",
        instructions: ""
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
                this.setState({
                    recipe: res.data, name: "", recipeName: "", photo: "", ingredients: "",
                    instructions: ""
                })
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
                <Row>
                    <SideMenu />
                </Row>
                <Row>

                    <Col>
                        {this.state.recipe.map(recipe => (

                            <RecipeCard
                                key={recipe._id}
                                name={recipe.name}
                                recipeName={recipe.recipeName}
                                photo={recipe.photo}
                            />
                        ))}
                    </Col>
                </Row>

            </div>

        )
    }
}

export default RecipePage