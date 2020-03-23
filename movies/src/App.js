import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import Movie from './pages/Movie';
import movies from './store/movies'
import Television from './pages/Television';
import NotFound from './pages/NotFound';

class App extends Component{
  constructor(){
    super()
      this.state= {
        allMovies: movies
      }
  }
render(){
  return (
    <>
   <Router>
     <div>
       <h1>This is our router</h1>
         <ul>
           {this.state.allMovies.map((movie, index) => 
           <li key={ index}>
             <Link to={`/movies/${movie.id}`}> {movie.name} 
             </Link>
           </li>
           )}
         </ul>
       <Switch>
         <Route
          path="/movies/:id"
          render={ (props) => <Movie {...props} movies={ this.state.allMovies} />}
         />
       </Switch>
     </div>
   </Router>

  </>
  );
}
}

export default App;
