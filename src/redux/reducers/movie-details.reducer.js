import { combineReducers } from "redux";

// Used to store details about a specific movie
const movieDetailsReducer = (state = {}, action) => {
	switch (action.type) {
		case "SET_MOVIE_DETAILS":
			return action.payload;
		default:
			return state;
	}
};

export default movieDetailsReducer;
