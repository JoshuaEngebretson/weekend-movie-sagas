import { put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchAllMovies() {
	// get all movies from the DB
	try {
		const movies = yield axios.get("/api/movie");
		console.log("get all:", movies.data);
		yield put({ type: "SET_MOVIES", payload: movies.data });
	} catch {
		console.log("get all error");
	}
}

function* allMoviesSaga() {
	yield takeEvery("FETCH_MOVIES", fetchAllMovies);
}

export default allMoviesSaga;
