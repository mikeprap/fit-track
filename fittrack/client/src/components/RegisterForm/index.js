import React from 'react'



class RegisterForm extends React.Component {
	// refs
	form: null;
	usernameElem: null;
	ageElem: null;
	weightElem: null;
	heightElem: null;
	passwordElem: null;

	render() {
		const { onRegister } = this.props;
		console.log(`Register form props are: ${JSON.stringify(this.props)}`);

		return (

			<form
				ref={(elem) => this.form = elem}
				onSubmit={(e) => {
					e.preventDefault();
					return onRegister({
						username: this.usernameElem.value,
						password: this.passwordElem.value,
						age: this.ageElem.value,
						weight: this.weightElem.value,
						height: this.heightElem.value
					});
				}}
			>
				<div className="field">
					<label className="label">Username</label>
					<div className="control">
						<input className="input" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' />
					</div>
				</div>
				<div className="field">
					<label className="label">Age</label>
					<div className="control">
						<input className="input" ref={(input) => this.ageElem = input} type='number' name="age" placeholder='Enter Your Age' />
					</div>
				</div>
				<div className="field">
					<label className="label">Weight</label>
					<div className="control">
						<input className="input" ref={(input) => this.weightElem = input} type='number' name="weight" placeholder='Enter Your Weight' />
					</div>
				</div>
				<div className="field">
					<label className="label">Height</label>
					<div className="select" ref={(select) => this.heightElem = select} name="height">
						<select>
							<option>Select Height</option>
							<option>4'10"</option>
							<option>4'11"</option>
							<option>5'0"</option>
							<option>5'1"</option>
							<option>5'2"</option>
							<option>5'3"</option>
							<option>5'4"</option>
							<option>5'5"</option>
							<option>5'6"</option>
							<option>5'7"</option>
							<option>5'8"</option>
							<option>5'9"</option>
							<option>5'10"</option>
							<option>5'11"</option>
							<option>5'12"</option>
							<option>6'0"</option>
							<option>6'1"</option>
							<option>6'2"</option>
							<option>6'3"</option>
							<option>6'4"</option>
							<option>6'5"</option>
							<option>6'6"</option>
							<option>6'7"</option>
							<option>6'8"</option>
							<option>6'9"</option>
							<option>6'10"</option>
							<option>6'11"</option>
							<option>7'0"</option>
						</select>
					</div>
					{/* <div className="control">
						<input className="input" ref={(input) => this.heightElem = input} type='number' name="height" placeholder='Enter Your Height' />
					</div> */}
				</div>
				<div className="field">
					<label className="label">Password</label>
					<div className="control">
						<input className="input" ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' />
					</div>
				</div>
				<button className="button is-rounded is-dark" type='submit'>Submit</button>
				{/* <div className="form-group">
					<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' /><br />
					<input className="form-control" ref={(input) => this.ageElem = input} type='number' name="age" placeholder='Enter Your Age' /><br />
					<input className="form-control" ref={(input) => this.weightElem = input} type='number' name="weight" placeholder='Enter Your Weight' /><br />
					<input className="form-control" ref={(input) => this.heightElem = input} type='number' name="height" placeholder='Enter Your Height' /><br />
					<input className="form-control" ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' /><br />
					<button className="btn btn btn-primary" type='submit'>Submit</button>
				</div> */}
			</form>

		)
	}
}

export default RegisterForm