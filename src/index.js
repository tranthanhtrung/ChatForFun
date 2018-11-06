import React from 'react';
import ReactDOM from 'react-dom';
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
import App from './App.js'

const store = createStore(rootReducer)

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
