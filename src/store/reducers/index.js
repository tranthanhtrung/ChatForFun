import projectReducer from './projectReducer.js'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
	Data: projectReducer,
	firestore: firestoreReducer,
});


export default rootReducer