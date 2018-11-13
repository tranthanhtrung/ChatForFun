import { creatDataFriend } from '../actions/index.js'

var initialState = {
	Data: {},
}

const projectReducer = (state = initialState, action) => {
	switch (action.type) {
    	case "CREAT_DATA":
    		return {
    			state: action.Data
    		}
    	case "CREAT_DATA_ERR":
    		return {
    			state
    		}
    	default:
    		return state
	}

}

export default projectReducer