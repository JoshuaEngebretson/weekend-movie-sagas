import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function MovieDetails() {

  const dispatch = useDispatch();
  
  const movie = useSelector(store => store.movieDetails[0])
  console.log('movie inside MovieDetails:', movie);

  let {id} = useParams();

  useEffect(() => {
    dispatch({
      type: 'GET_MOVIE_DETAILS',
      payload: id
    })
  }, []);


  return (
    <>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <h2>Associated Genres</h2>
      <ul>
        {movie.genres.map(genre => {
          return <li key={genre}>{genre}</li>
        })}
      </ul>
    </>
  )
}

export default MovieDetails;