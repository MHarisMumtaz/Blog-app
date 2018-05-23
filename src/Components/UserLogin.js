import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from "react-redux";

import { setLoginUser } from "../Actions/Actions";

const mapDispatchToProps = dispatch => {
  return {
    setLoginUser: user => dispatch(setLoginUser(user))
  };
};

class UserLogin extends Component{

	constructor(props){
		super(props);
	}
	onLoginSuccess(response){
		this.props.setLoginUser(response.profileObj);
		this.props.history.push('add-blog');
	}
	onLoginFail(error){
		console.log(error);
	}

	render(){
		return(
			<div className="card card-container login-form">
	            <h1>Google Sign in</h1>
            	<GoogleLogin
					    clientId="433515739830-d10eui0lideja33jp2kho88da47dii98.apps.googleusercontent.com"
					    buttonText="Sign In"
					    onSuccess={this.onLoginSuccess.bind(this)}
					    onFailure={this.onLoginFail.bind(this)}
					  />
        	</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(UserLogin);