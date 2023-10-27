import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom/";
import { useEffect } from "react";
import "./MovieDetails.css";
import DetailNavButtons from "./DetailNavButtons/DetailNavButtons";
import { Paper } from "@mui/material";

function MovieDetails() {
	const dispatch = useDispatch();
	const movie = useSelector((store) => store.movieDetails[0]);
	const movieCount = useSelector(
		(store) => store.allMoviesReducer.length
	);
	console.log("movie inside MovieDetails:", movie);
	console.log(movieCount);

	let { id } = useParams();

	useEffect(() => {
		dispatch({
			type: "FETCH_MOVIES",
		});
		dispatch({
			type: "GET_MOVIE_DETAILS",
			payload: id,
		});
	}, []);

	// confirm movie is defined, then render information
	// This ensures that there are no to less errors on loading the page
	if (movie != undefined) {
		return (
			<>
				<DetailNavButtons id={id} movieCount={movieCount} />
				<Paper
					elevation={4}
					sx={{
						width: "60%",
						margin: "auto",
						backgroundColor: "rgb(72, 160, 131)",
						paddingBottom: "1%",
					}}
				>
					<div className="movie-info">
						<h2>{movie.title}</h2>
						<img src={movie.poster} alt={movie.title} />
						<h3>Movie Description</h3>
						<p>{movie.description}</p>
					</div>
					<div className="genres">
						<h3>Associated Genres</h3>
						<ul>
							{movie.genres.map((genre) => {
								return <li key={genre}>{genre}</li>;
							})}
						</ul>
					</div>
				</Paper>
			</>
		);
	}
	// if movie is not defined, don't attempt to render info based on the movie.
	else {
		return (
			<>
				<DetailNavButtons id={id} movieCount={movieCount} />
				<h1>Not enough movies for this page to exist</h1>
			</>
		);
	}
}

export default MovieDetails;
