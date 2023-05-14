import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import Header from '../Header/Header';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div className="App">
      {/* <CssBaseline /> */}
      <Router>        
        <Header />
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path='/details/:id' exact>
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
