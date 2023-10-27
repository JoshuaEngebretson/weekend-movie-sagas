import "./MovieItem.css";
import { useHistory } from "react-router-dom/";

function MovieItem({ movie }) {
	const history = useHistory();

	const sendToDetails = () => {
		history.push(`/details/${movie.id}`);
	};

	const altText = `Movie Poster for ${movie.title}`;

	return (
		<div
			key={movie.id}
			onClick={sendToDetails}
			className="movie-card"
		>
			<h3>{movie.title}</h3>
			<img src={movie.poster} alt={altText} />
		</div>
	);
}

export default MovieItem;
