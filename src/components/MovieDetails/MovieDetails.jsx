import { useSelector } from "react-redux";

function MovieDetails() {

  const movie = useSelector(store => store.movieDetails)
  console.log('movie inside MovieDetails:', movie);

  return (
    <h1>Inside Movie Details page</h1>
  )
}

export default MovieDetails;