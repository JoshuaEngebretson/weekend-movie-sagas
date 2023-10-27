import { combineReducers } from "redux";

// Used to store the movie genres
const genresReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_GENRES":
			return action.payload;
		default:
			return state;
	}
};

export default genresReducer;
