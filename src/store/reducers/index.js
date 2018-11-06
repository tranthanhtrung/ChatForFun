var initialState = {
	state: [],
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
    	case "Auth":
    		return {
    			state
    		}
    	default:
    		return state
	}
}

export default rootReducer