import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import {Switch} from 'react-router';
import { Provider } from 'react-redux';
import { getFirestore } from 'redux-firestore';

import SignIn from './component/SignIn.js';
import Home from './component/Home.js';
import rootReducer from './store/reducers/index.js';


class App extends React.Component{
	render() {
		return(
		<Router>
		  <div>
		    <Switch>
		      <Route exact path="/SignIn" component={SignIn} />
		      <Route exact path="/" component={Home} />
		    </Switch>
		  </div>
		</Router>
		)
	} 
}
export default App;