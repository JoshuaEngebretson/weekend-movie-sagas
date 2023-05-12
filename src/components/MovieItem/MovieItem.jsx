import { useDispatch } from "react-redux";

function MovieItem({movie}) {
  const dispatch = useDispatch();

  const sendToDetails = () => {
    console.log(`Clicked on ${movie.title}, will send to details`);
    dispatch({
      type: 'GET_MOVIE_DETAILS',
      payload: movie.id
    })
  }

  return (
    <div key={movie.id} >
      <h3>{movie.title}</h3>
      <img
        src={movie.poster} 
        alt={movie.title}
        onClick={sendToDetails}
      />
    </div>  
  )
}

export default MovieItem;