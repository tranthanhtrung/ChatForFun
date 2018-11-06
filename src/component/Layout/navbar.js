import React , { Component } from 'react';
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom';

import firebase from '../../config/fbConfig.js'
import '../../style/navbar.css'


class Navbar extends React.Component{
	constructor(props){
    super(props);
    this.state = {
			User: []       
    	}
  	}
	SignOut = () => {
		firebase.auth().signOut();	
		this.props.history.push("/SignIn");	
	}
	componentDidMount = () => {
		firebase.auth().onAuthStateChanged( user => {
		  	if (user) {
		  		this.setState({
		  			User: user,
		  		})
		 	} else {
				this.props.history.push("/SignIn");	
		  	}
		});
	}
	render(){
		return(
			<div className="nav">
				<div className="nameOfPro"> Chat ForFun</div>
				<div className="infCur">
					<img src={this.state.User.photoURL}/><span>{this.state.User.displayName}</span>
					<button onClick={this.SignOut}>Sign out</button>
				</div>
			</div>
		)
	}
}
export default withRouter(Navbar)