import { combineReducers } from "redux";

// Used to store movies returned from the server
const allMoviesReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_MOVIES":
			return action.payload;
		default:
			return state;
	}
};

export default allMoviesReducer;
