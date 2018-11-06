import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from '../config/fbConfig.js'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import './../style/SignIn.css'
 

class SignIn extends React.Component{
	state = {
		username: "",
		password: "",
		isSignIn: false,
	}
	uiConfig = {
		signInFlow: "popup",
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		],
		callback: {
			signInSuccess: () => false
		}
	}
	componentDidMount = () => {
		firebase.auth().onAuthStateChanged( user => {
			this.setState({isSignIn: !!user})
		})
	}

	redirec = () => {
		this.props.history.push("/");
	}
	
	render(){
		return(
			<div className="Content">
				{this.state.isSignIn ?
					(
						<div>{this.redirec()}</div>
					)
					:
					(
						<div className="SignIn">
							<div className="NameApp">Chat ForFun</div>
							<div><input className="Email" placeholder="Email"/></div>
							<div><input className="Pas" type="password" placeholder="Password"/></div>
							<div><button href="" className="bt">Sign In</button></div>
							<StyledFirebaseAuth
								uiConfig={this.uiConfig}
								firebaseAuth={firebase.auth()} 
							/>
						</div>
					)
				}
			</div>
		)
	}
}

export default SignIn