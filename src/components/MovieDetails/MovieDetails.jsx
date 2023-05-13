import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom/";
import { useEffect } from "react";


function MovieDetails() {

  const dispatch = useDispatch();
  const history = useHistory();
  
  const movie = useSelector(store => store.movieDetails[0])
  console.log('movie inside MovieDetails:', movie);

  let {id} = useParams();

  useEffect(() => {
    dispatch({
      type: 'GET_MOVIE_DETAILS',
      payload: id
    })
  }, []);

  const sendBackToMovieList = () => {
    history.push('/');
  }

  // confirm movie is defined, then render information
      // This ensures that there are no to less errors on loading the page
  if (movie != undefined) {
    return (
      <>
        {/* <button onClick={sendBackToMovieList}>Back to List</button> */}
        <h1>{movie.title}</h1>
        <ul>
          {movie.genres.map(genre => {
            return <li key={genre}>{genre}</li>
          })}
        </ul>
        <img src={movie.poster} alt={movie.title} />
        <p>{movie.description}</p>
        <h2>Associated Genres</h2>
      </>
    )
  }
  // if movie is not defined, don't attempt to render info based on the movie.
  else {
    return ''
  }
}

export default MovieDetails;