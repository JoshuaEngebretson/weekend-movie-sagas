import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom/';

function MovieItem({movie}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const sendToDetails = () => {
    console.log(`Clicked on ${movie.title}, will send to details`);
    dispatch({
      type: 'GET_MOVIE_DETAILS',
      payload: movie.id
    })
    history.push(`/details/${movie.id}`)
  }

  return (
    <div key={movie.id} onClick={sendToDetails}>
      <h3>{movie.title}</h3>
      <img
        src={movie.poster} 
        alt={movie.title}
      />
    </div>  
  )
}

export default MovieItem;