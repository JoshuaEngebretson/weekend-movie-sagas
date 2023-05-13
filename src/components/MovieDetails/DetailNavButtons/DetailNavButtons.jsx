import { useHistory } from "react-router-dom/";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import {styled} from '@mui/material/styles';
import * as React from 'react';

export default function DetailNavButtons({id, movieCount}) {

  const history = useHistory();

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
      <Button key='first' onClick={goToFirstMovie} disabled variant='contained'>First Movie</Button>,
      // No more Previous Movie, time to disable the button
      <Button key='back' onClick={previousMovie} disabled variant='contained'>Previous Movie</Button>,
      <Button key='home' onClick={sendHome} variant='contained'>Home</Button>,
      <Button key='next' onClick={nextMovie} variant='contained'>Next Movie</Button>,
      <Button key='last' onClick={goToLastMovie} variant='contained'>Last Movie</Button>
    ]
  } else if (Number(id) > 1 && Number(id) < movieCount) {
    buttons = [
      <Button key='first' onClick={goToFirstMovie} variant='contained'>First Movie</Button>,
      <Button key='back' onClick={previousMovie} variant='contained'>Previous Movie</Button>,
      <Button key='home' onClick={sendHome} variant='contained'>Home</Button>,
      <Button key='next' onClick={nextMovie} variant='contained'>Next Movie</Button>,
      <Button key='last' onClick={goToLastMovie} variant='contained'>Last Movie</Button>
    ]
  } else if (Number(id) === movieCount) {
    buttons = [
      <Button key='first' onClick={goToFirstMovie} variant='contained'>First Movie</Button>,
      <Button key='back' onClick={previousMovie} variant='contained'>Previous Movie</Button>,
      <Button key='home' onClick={sendHome} variant='contained'>Home</Button>,
      // We are on the last movie, time to disable the Next Movie button
      <Button key='next' onClick={nextMovie} disabled variant='contained'>Next Movie</Button>,
      // We are on the last movie, time to disable the Last Movie button
      <Button key='last' onClick={goToLastMovie} disabled variant='contained'>Last Movie</Button>
    ]
  } else {
    buttons = [
      // We are outside of the number of movies, can send back to the first
      <Button key='first' onClick={goToFirstMovie} variant='contained'>First Movie</Button>,
      // We are outside of the number of movies, disable the Previous Movie button
      <Button key='back' onClick={previousMovie} disabled variant='contained'>Previous Movie</Button>,
      <Button key='home' onClick={sendHome} variant='contained'>Home</Button>,
      // We are past the last movie, time to disable the Next Movie button
      <Button key='next' onClick={nextMovie} disabled variant='contained'>Next Movie</Button>,
      // We are past the last movie, can send back to it
      <Button key='last' onClick={goToLastMovie} variant='contained'>Last Movie</Button>
    ]
  }

  return (
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
  )
}