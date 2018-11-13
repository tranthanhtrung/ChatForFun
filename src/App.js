import React from 'react'
import './index.css'
import { createStore } from 'redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Switch} from 'react-router'

import SignIn from './component/SignIn.js'
import Home from './component/Home.js'


class App extends React.Component{
	render() {
		return(
		<Router>
		    <Switch>
		      <Route exact path="/SignIn" component={SignIn} />
		      <Route exact path="/:id" component={Home} />
		    </Switch>
		</Router>
		)
	} 
}
export default App;