import * as React from 'react';
import { useHistory } from "react-router-dom/";
// material-ui Components
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import {styled} from '@mui/material/styles';
// material-ui Icons
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SkipNextIcon from '@mui/icons-material/SkipNext';


export default function DetailNavButtons({id, movieCount}) {

  const StyledButton = styled(Button)(() => ({
    backgroundColor: 'rgb(15, 133, 102)',
    color: 'rgb(255,255,255)',
    // color: 'black',
    '&:hover': {
      backgroundColor: 'rgb(119, 187, 85)',
    }
  }))

  const history = useHistory();

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

  // Set whether buttons are enabled or disabled based on
  //  page number (id)
  if (Number(id) === 1) {
    buttons = [
      // We are on the first movie, time to disable the First Movie button
      <StyledButton
        key='first'
        onClick={goToFirstMovie}
        variant='contained'
        disabled>
          <SkipPreviousIcon />
      </StyledButton>,
      // No more Previous Movie, time to disable the button
      <StyledButton
        key='back'
        onClick={previousMovie}
        variant='contained'
        disabled>
          <NavigateBeforeIcon />
      </StyledButton>,
      <StyledButton
        key='next'
        onClick={nextMovie}
        variant='contained'>
          <NavigateNextIcon />
      </StyledButton>,
      <StyledButton
        key='last'
        onClick={goToLastMovie}
        variant='contained'>
          <SkipNextIcon />
      </StyledButton>
    ]
  } else if (Number(id) > 1 && Number(id) < movieCount) {
    buttons = [
      <StyledButton
        key='first'
        onClick={goToFirstMovie} 
        variant='contained'>
          <SkipPreviousIcon />
      </StyledButton>,
      <StyledButton
        key='back'
        onClick={previousMovie} 
        variant='contained'>
          <NavigateBeforeIcon />
      </StyledButton>,
      <StyledButton
        key='next'
        onClick={nextMovie} 
        variant='contained'>
          <NavigateNextIcon />
      </StyledButton>,
      <StyledButton
        key='last'
        onClick={goToLastMovie} 
        variant='contained'>
          <SkipNextIcon />
      </StyledButton>
    ]
  } else if (Number(id) === movieCount) {
    buttons = [
      <StyledButton
        key='first'
        onClick={goToFirstMovie}
        variant='contained'>
          <SkipPreviousIcon />
      </StyledButton>,
      <StyledButton
        key='back'
        onClick={previousMovie}
        variant='contained'>
          <NavigateBeforeIcon />
      </StyledButton>,
      // We are on the last movie, time to disable the Next Movie button
      <StyledButton
        key='next'
        onClick={nextMovie}
        variant='contained'
        disabled>
          <NavigateNextIcon />
      </StyledButton>,
      // We are on the last movie, time to disable the Last Movie button
      <StyledButton
        key='last'
        onClick={goToLastMovie}
        variant='contained'
        disabled>
          <SkipNextIcon />
      </StyledButton>
    ]
  } else {
    buttons = [
      // We are outside of the number of movies, can send back to the first
      <StyledButton
        key='first'
        onClick={goToFirstMovie}
        variant='contained'>
          <SkipPreviousIcon />
      </StyledButton>,
      // We are outside of the number of movies, disable the Previous Movie button
      <StyledButton
        key='back'
        onClick={previousMovie}
        disabled
        variant='contained'>
          <NavigateBeforeIcon />
      </StyledButton>,
      // We are past the last movie, time to disable the Next Movie button
      <StyledButton
        key='next'
        onClick={nextMovie}
        disabled
        variant='contained'>
          <NavigateNextIcon />
      </StyledButton>,
      // We are past the last movie, can send back to it
      <StyledButton
        key='last'
        onClick={goToLastMovie}
        variant='contained'>
          <SkipNextIcon />
      </StyledButton>
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