import React from 'react'
import firebase from '../config/fbConfig.js'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

import './../style/home.scss'
import Navbar from './Layout/navbar.js'


class Home extends React.Component{
	constructor(props) {
        super()
    }
    state = {
    	name: '',
    	photo: '',
    }
   	handleChange = (Name, photo) => {
   		this.setState({
   			name: Name,
   			photo: photo
   		})
   	}
	render(){
		let friends = null
		let data = null
		if (this.props.Friends !== undefined)
		{
			friends = this.props.Friends.map( item => 
				<li className="clearfix">
		          <img src={item.Data.photo} alt="avatar" />
		          <div className="about">
		            <Link to={{
                                pathname: '/' + item.Data.Uid,
                             }} onClick={() => this.handleChange(item.Data.Name,item.Data.photo)}>
		            	<div className="name">{item.Data.Name}</div>
		            </Link>
		            <div className="status">
		              <i className="fas fa-circle online"></i> online
		            </div>
		          </div>
		        </li>
			);
		}
		if (this.props.Data !== undefined)
		{
			var item = null
			for(var i = 0; i < this.props.Data.length; i++)
			{
				item = this.props.Data[i]
				if(item.User1 === firebase.auth().O || item.User2 === firebase.auth().O)
				{
					if(item.User1 === this.props.match.params.id || item.User2 === this.props.match.params.id)
					{
						data = this.props.Data[i].Content.map( result =>
							<ul>
					            {result.send == firebase.auth().O ? 
					            (
					            	<li>
							            <div className="message-data">
							              <span className="message-data-name"><i className="fas fa-circle online"></i> Vincent</span>
							              <span className="message-data-time">10:12 AM, Today</span>
							            </div>
							            <div className="message my-message">
							              {result.data}
							            </div>
							        </li>
					            ):(
					            	<li className="clearfix">
							            <div className="message-data align-right">
							              <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
							              <span className="message-data-name" >Olia</span> <i className="fas fa-circle me"></i>
							              
							            </div>
							            <div className="message other-message float-right">
							             	{result.data}
							            </div>
							         </li>
					            )}	
					        </ul>				            
						)
					}

				}
			}
		}
		return(
			<div>
				<Navbar></Navbar>
				<div className="container clearfix">
				   <div className="people-list" id="people-list">
				      <div className="search">
				        <input type="text" placeholder="search" />
				        <i className="fas fa-search"></i>
				      </div>
					      <ul className="list">
					  		{friends}
					      </ul>
				   </div>
				    
				   <div className="chat">
				      <div className="chat-header clearfix">
				        <img src={this.state.photo} alt="avatar" />
				        
				        <div className="chat-about">
				          <div className="chat-with">Chat with {this.state.name}</div>
				          {/*<div className="chat-num-messages">already 1 902 messages</div>*/}
				        </div>
				        <i className="fas fa-star"></i>
				      </div> 
				      
				      <div className="chat-history">
				        {data}	        
				      </div>
				      
				      <div className="chat-message clearfix">
				        <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
				                
				        <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
				        <i className="fa fa-file-image-o"></i>
				        
				        <button>Send</button>

				      </div>     
				   </div> 
    			</div> 
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		Data: state.firestore.ordered.Chat,
		Friends: state.firestore.ordered.Friends,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		//creatData: (Data) => dispatch(creatData(Data))
	}
}

export default compose(
	connect(mapStateToProps, null),
	firestoreConnect([
		{collection: 'Chat', },
		{ collection: 'Friends', }
	])
)(Home)


