import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom/";
import { useEffect } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';


function MovieDetails() {

  const dispatch = useDispatch();
  const history = useHistory();
  
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

  const sendHome = () => {
    history.push('/');
  }

  const previousMovie = () => {
    history.push(`/details/${Number(id)-1}`);
    window.location.reload(false);
  }

  const nextMovie = () => {
    history.push(`/details/${Number(id)+1}`);
    window.location.reload(false);
  }

  const goToFirstMovie = () => {
    history.push('/details/1');
    window.location.reload(false);
  }

  const goToLastMovie = () => {
    history.push(`/details/${movieCount}`);
    window.location.reload(false);
  }

  let buttons = []
  if (Number(id) === 1) {
    buttons = [
      // We are on the first movie, time to disable the First Movie button
      <Button key='back' onClick={goToFirstMovie} disabled variant='contained'>First Movie</Button>,
      // No more Previous Movie, time to disable the button
      <Button key='back' onClick={previousMovie} disabled variant='contained'>Previous Movie</Button>,
      <Button key='home' onClick={sendHome} variant='contained'>Home</Button>,
      <Button key='next' onClick={nextMovie} variant='contained'>Next Movie</Button>,
      <Button key='next' onClick={goToLastMovie} variant='contained'>Last Movie</Button>
    ]
  } else if (Number(id) > 1 && Number(id) < movieCount) {
    buttons = [
      <Button key='back' onClick={goToFirstMovie} variant='contained'>First Movie</Button>,
      <Button key='back' onClick={previousMovie} variant='contained'>Previous Movie</Button>,
      <Button key='home' onClick={sendHome} variant='contained'>Home</Button>,
      <Button key='next' onClick={nextMovie} variant='contained'>Next Movie</Button>,
      <Button key='next' onClick={goToLastMovie} variant='contained'>Last Movie</Button>
    ]
  } else if (Number(id) === movieCount) {
    buttons = [
      <Button key='back' onClick={goToFirstMovie} variant='contained'>First Movie</Button>,
      <Button key='back' onClick={previousMovie} variant='contained'>Previous Movie</Button>,
      <Button key='home' onClick={sendHome} variant='contained'>Home</Button>,
      // We are on the last movie, time to disable the Next Movie button
      <Button key='next' onClick={nextMovie} disabled variant='contained'>Next Movie</Button>,
      // We are on the last movie, time to disable the Last Movie button
      <Button key='next' onClick={goToLastMovie} disabled variant='contained'>Last Movie</Button>
    ]
  } else {
    buttons = [
      // We are outside of the number of movies, can send back to the first
      <Button key='back' onClick={goToFirstMovie} variant='contained'>First Movie</Button>,
      // We are outside of the number of movies, disable the Previous Movie button
      <Button key='back' onClick={previousMovie} disabled variant='contained'>Previous Movie</Button>,
      <Button key='home' onClick={sendHome} variant='contained'>Home</Button>,
      // We are past the last movie, time to disable the Next Movie button
      <Button key='next' onClick={nextMovie} disabled variant='contained'>Next Movie</Button>,
      // We are past the last movie, can send back to it
      <Button key='next' onClick={goToLastMovie} variant='contained'>Last Movie</Button>
    ]
  }

  // confirm movie is defined, then render information
      // This ensures that there are no to less errors on loading the page
  if (movie != undefined) {
    return (
      <>
        <Box
          sx={{
            diplay: 'flex',
            flexDirection: 'column',
            alightItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup size="small" aria-label='medium secondary button group'>
            {buttons}
          </ButtonGroup>
        </Box>
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
        <Box
          sx={{
            diplay: 'flex',
            flexDirection: 'column',
            alightItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup size="small" aria-label='medium secondary button group'>
            {buttons}
          </ButtonGroup>
        </Box>
        <h1>Not enough movies for this page to exist</h1>
      </>
    )
  }
}

export default MovieDetails;