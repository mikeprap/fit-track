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
		
		this.loadVideo();
	}
	
	loadVideo = () => {
		fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=absworkout&key=AIzaSyCbe0-7OsepLY88Fig1jKT6pfZuXiL2FAo")
			.then(res => {
				return res.json()
			})
			.then(res =>
				this.setState({
					video: res.items[2].id.videoId
				})
			)


	}


	render() {
		const opts = {
			height: '390',
			width: '640',
			playerVars: { // https://developers.google.com/youtube/player_parameters
				autoplay: 1
			}
		};
		return (
			<div>
				<div>
					<Row>
						<SideMenu />
					</Row>
					
						

					 <YouTube 
						videoId={this.state.video}
						opts={opts}
						onReady={this._onReady}
					/> 
				</div>

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


			</div>
		)
	}
}

export default ProtectedRoute