import React from 'react'
import GetYoutube from "../../utils/API";
import Card from '../../components/Card/index'
import Card1 from '../../components/Card1/index'
import Card2 from '../../components/Card2/index'
import Jumbotron2 from '../../components/Jumbotron2';
import YouTube from 'react-youtube';
import SideMenu from '../../components/Menu';

import DinnerCard from '../../components/DinnerCard'
import DinnerCard1 from '../../components/DinnerCard1'

import Row from '../../components/Grid';


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
		
		
		
	}
	
	


	render() {
		
		return (
			<div>
				<div>
                    <Row>
				<SideMenu/>

					

					
					

                </Row>
					<Jumbotron2/>

				</div>




			</div>
		)
	}
}

export default ProtectedRoute