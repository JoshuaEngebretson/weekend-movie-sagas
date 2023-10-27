import { all } from "redux-saga/effects";
import allMoviesSaga from "./all-movies.saga";
import movieDetailsSaga from "./movie-details.saga";

export default function* rootSaga() {
	yield all([allMoviesSaga(), movieDetailsSaga()]);
}
