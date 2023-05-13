import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom/';

function GenresPage() {

  const dispatch = useDispatch();

  const genres = useSelector(store => store.genres)
  const genreSpecificMovies = useSelector(store => store.genreSpecificMovies)

  let {genreName} = useParams();

  return (
    <>
      <h1>Inside Genres Page</h1>
      {genres.map(genre => {
        if (genre.name = genreName) {
          return <h1>{genre.name}</h1>
        }
      })}
    </>
  )
}

export default GenresPage;