import React, { Component } from 'react';

class LoginForm extends Component {
	username = React.createRef();
	// componentDidMount() {
	//   this.username.current.focus();
	// }
	state = {
		account: {
			username: '',
			password: '',
		},
	};
	handleSubmit = (event) => {
		event.preventDefault(); //it will reload the page
		console.log(this.username.current.value);
	};
	handleChange = ({ currentTarget: input }) => {
		const account = { ...this.state.account };
		account[input.name] = input.value;
		this.setState({ account });
		console.log(account);
	};
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="text">Email:</label>
							<input
								type="text"
								onChange={this.handleChange}
								value={this.state.account.username}
								className="form-control"
								id="text"
								placeholder="Enter text"
								name="username"
								ref={this.username}
								autoFocus
							/>
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Password:</label>
							<input
								type="password"
								onChange={this.handleChange}
								value={this.state.account.password}
								className="form-control"
								id="pwd"
								placeholder="Enter password"
								name="password"
							/>
						</div>

						<input type="submit" value="Submit" className="btn" />
					</form>
				</div>
				{/*bootstrap form*/}
			</React.Fragment>
		);
	}
}

export default LoginForm;
