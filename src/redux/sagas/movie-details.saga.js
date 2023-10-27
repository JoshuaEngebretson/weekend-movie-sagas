import { put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getMovieDetails(action) {
	try {
		const movieDetails = yield axios({
			type: "GET",
			url: `/api/movie/details/${action.payload}`,
		});
		yield put({
			type: "SET_MOVIE_DETAILS",
			payload: movieDetails.data,
		});
	} catch (error) {
		console.log("Error in getMovieDetails saga function:", error);
	}
}

function* movieDetailsSaga() {
	yield takeLatest("GET_MOVIE_DETAILS", getMovieDetails);
}

export default movieDetailsSaga;
