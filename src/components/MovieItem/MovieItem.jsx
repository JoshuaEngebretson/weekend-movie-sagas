import './MovieItem.css';
import { useHistory } from 'react-router-dom/';

function MovieItem({movie}) {

  const history = useHistory();

  const sendToDetails = () => {
    console.log(`Clicked on ${movie.title}, will send to details`);
    history.push(`/details/${movie.id}`)
  }

  return (
    <div key={movie.id} onClick={sendToDetails} className='movie-card'>
      <h3>{movie.title}</h3>
      <img
        src={movie.poster} 
        alt={movie.title}
      />
    </div>  
  )
}

export default MovieItem;