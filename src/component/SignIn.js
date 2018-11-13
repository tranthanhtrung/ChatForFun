import React from 'react';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from '../config/fbConfig.js'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { creatDataFriend } from './../store/actions/index.js' 

import './../style/SignIn.css'
 

class SignIn extends React.Component{
	constructor(props) {
        super()
    }
	state = {
		Data: {},
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
		if(firebase.auth().currentUser !== null)
			{
				if(this.props.Data === undefined)
				{		
					var tmp ={
							Name: firebase.auth().currentUser.displayName,
							Uid: firebase.auth().O,
							photo: firebase.auth().currentUser.photoURL,
							isOn: true,
						}
					this.props.creatDataFriend(tmp)
				}
				else
				{
					for(var i = 0; i < this.props.Data.length; i++) 
					{
						if(i === this.props.Data.length - 1)
						{
						
 							if(this.props.Data[i].Data.Uid !== firebase.auth().O )
							{
								var tmp ={
									Name: firebase.auth().currentUser.displayName,
									Uid: firebase.auth().O,
									photo: firebase.auth().currentUser.photoURL,
									isOn: true,
								}
								this.props.creatDataFriend(tmp)
							}
						}
					}
				}
			}
	
		this.props.history.push("/");
	}
	
	render(){
		console.log(this.props.Data);
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
const mapStateToProps = (state) => {
	return {
		Data: state.firestore.ordered.Friends,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		creatDataFriend: (Data) => dispatch(creatDataFriend(Data))
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([
		{ collection: 'Friends', }
	])
)(SignIn)

