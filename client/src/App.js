import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
  Redirect,
  Switch,
	withRouter
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import {Container} from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/ProtectedRoute";
import Home from "./pages/Home";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Dinner from "./pages/Dinner";
import Workout from "./pages/Workout";
import Recipe from "./components/Recipe"
import './App.css';
import RecipeForm from './components/RecipeForm';
import Recipes from "./pages/Recipes";

//I want to add some basic inline styling here, even though we are bringing in styles
const listStyle = {
	color: 'cornflowerblue',
	listStyle:'none'
  };
//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
	<Router>
		<div>
      		<Nav className="App-header"/>
			<Container>
				<AuthButton/>
				{/* <ul style={listStyle}>
					<li><Link to="/public">Public Page</Link></li>
					<li><Link to="/protected">Protected Page</Link></li>
					<li><Link to="/register">Register a New User</Link></li>
				</ul> */}
				<Switch>
					<Route path="/public" component={PublicRoute}/>
					<Route path="/login" component={Login}/>
					<Route path="/register" component={Register}/>
					<PrivateRoute path="/protected" component={Home}/>
					<Route path="/home" component={Home}/>
					<Route path="/breakfast" component={Breakfast}/>
					<Route path="/lunch" component={Lunch}/>
					<Route path="/dinner" component={Dinner}/>
					<Route path="/workout" component={Workout}/>
					<Route path="/recipe" component={RecipeForm}/>
					<Route path="/recipes" component={Recipes}/>
					{/* <Route component={NoMatch} /> */}
				</Switch>
			</Container>
		</div>
	</Router>
)


//Authbutton component / withRouter is imported from react-router
const AuthButton = withRouter(({ history }) => (
	Auth.isAuthenticated ? (
		<div className="container">
			{/* <p>Success! You are Logged In!</p> */}
			{/* <button className="btn btn-danger" 
				onClick={() => {
					Auth.signout(() => history.push('/'))
				}}>
				Sign out
			</button> */}
		</div>
	) : (
		<p></p>
	)
))

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		Auth.isAuthenticated ? (
			<Component {...props}/>
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}}/>
		)
	)}/>
)








export default AuthExample

