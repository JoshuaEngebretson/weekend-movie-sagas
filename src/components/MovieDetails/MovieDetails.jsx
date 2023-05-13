import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom/";
import { useEffect } from "react";
import './MovieDetails.css'
import DetailNavButtons from "./DetailNavButtons/DetailNavButtons";


function MovieDetails() {

  const dispatch = useDispatch();
  
  const movie = useSelector(store => store.movieDetails[0])
  const movieCount = useSelector(store => store.movies.length)
  console.log('movie inside MovieDetails:', movie);
  console.log(movieCount);

  let {id} = useParams();

  useEffect(() => {
    dispatch({
      type: 'FETCH_MOVIES'
    })
    dispatch({
      type: 'GET_MOVIE_DETAILS',
      payload: id
    })
  }, []);

  // confirm movie is defined, then render information
      // This ensures that there are no to less errors on loading the page
  if (movie != undefined) {
    return (
      <>
        <DetailNavButtons id={id} movieCount={movieCount}/>
        {/* <button onClick={sendBackToMovieList}>Back to List</button> */}
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
  // if movie is not defined, don't attempt to render info based on the movie.
  else {
    return (
      <>
        <DetailNavButtons id={id} movieCount={movieCount} />
        <h1>Not enough movies for this page to exist</h1>
      </>
    )
  }
}

export default MovieDetails;