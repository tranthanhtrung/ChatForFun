import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import './../style/SignIn.css'
// import firebase from 'firebase'

// const firebaseConfig = {}

firebase.initializeApp({
	apiKey: "AIzaSyBz8bKkQsao5OaRQxFv_tIKBl3U1lg4mOs",
    authDomain: "appchat-fb0db.firebaseapp.com",
    databaseURL: "https://appchat-fb0db.firebaseio.com",
    projectId: "appchat-fb0db",
    storageBucket: "appchat-fb0db.appspot.com",
    messagingSenderId: "5185357440"
})

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
			console.log(user);
		})
	}
	SignOut = () => {
		firebase.auth().signOut()
	}
	render(){
		return(
			<div className="Content">
				{this.state.isSignIn ?
					(
						<div className="SignOut">
							<div>Welcome <span className="Name">{firebase.auth().currentUser.displayName}</span></div>
							<div><img className="avt" src={firebase.auth().currentUser.photoURL}></img></div>
							<button className="bt" onClick={this.SignOut}>Sign out </button>
						</div>
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