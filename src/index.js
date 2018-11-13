import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig.js'

import rootReducer from './store/reducers/index.js'
import App from './App.js'


const store = createStore(rootReducer, 
	compose(
		applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
		reduxFirestore(fbConfig),
		reactReduxFirebase(fbConfig)
	)
);

ReactDOM.render(
	<Provider store={store}>
    	<App />
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
