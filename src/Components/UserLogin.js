import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { connect } from "react-redux";

import { setLoginUser, addUser } from "../Actions/Actions";

const mapDispatchToProps = dispatch => {
  return {
    setLoginUser: user => dispatch(setLoginUser(user)),
    addUser: user => dispatch(addUser(user))
  };
};

class UserLogin extends Component{

	constructor(props){
		super(props);
	}
	onGoogleLoginSuccess(response){
		response.profileObj.id = response.googleId;
		this.props.addUser(response.profileObj);
		this.props.setLoginUser(response.profileObj);
		this.props.history.push('add-blog');
	}
	onFbLoginSuccess(response){
		this.props.addUser(response);
		this.props.setLoginUser(response);
		this.props.history.push('/');
	}

	onGoogleLoginFail(error){
		console.log(error);
	}

	onFbLoginFail(error){

	}

	render(){
		return(
			<div className="card card-container login-form">

	            
	            <div className="col-md-12">
	            	<div className="col-md-6">
	            		<label className="googleLabel">Google Sign in</label>
	            	</div>
	            	<div className="col-md-6 googleSignin">
            		<GoogleLogin
					    clientId="433515739830-d10eui0lideja33jp2kho88da47dii98.apps.googleusercontent.com"
					    buttonText="Sign In"
					    onSuccess={this.onGoogleLoginSuccess.bind(this)}
					    onFailure={this.onGoogleLoginFail.bind(this)}
					  />
					</div>
				</div>
				<div className="col-md-12 fbSignIn">
					{/*autoLoad={true}*/}
					<div className="col-md-6">
	            		<label className="googleLabel">Facebook Sign in</label>
	            	</div>
	            	<div className="col-md-6">
					 	<FacebookLogin
						    appId="1667110263342356"
						    
						    fields="name,email,picture"
						    onClick={this.onFbLoginFail.bind(this)}
						    callback={this.onFbLoginSuccess.bind(this)}
						    icon="fa-facebook"
						    render={renderProps => (
						    <button className="fbSignBtn btn btn-default" onClick={renderProps.onClick}>Facebook</button>
						  )}
					    />
					</div>
				</div>
        	</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(UserLogin);