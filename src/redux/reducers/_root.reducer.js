import { combineReducers } from "redux";
import movieDetails from "./movie-details.reducer";
import genresReducer from "./genres.reducer";
import allMoviesReducer from "./all-movies.reducer";

const rootReducer = combineReducers({
	movieDetails,
	genresReducer,
	allMoviesReducer,
});

export default rootReducer;
