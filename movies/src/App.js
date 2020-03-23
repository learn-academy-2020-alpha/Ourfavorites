import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
import './App.css';
import Movie from './pages/Movie';
import movies from './store/movies'
import television from './store/television'
import Television from './pages/Television';
import NotFound from './pages/NotFound';

class App extends Component{
  constructor(){
    super()
      this.state= {
        allMovies: movies,
        allTelevision: television
      }
  }
render(){
  return (
    <>
   <Router>
     <div>
       <h1>This is our List</h1>
       <h3>Movies:</h3>
         <ul>
           {this.state.allMovies.map((movie, index) =>
           <li key={ index}>
             <Link to={`/movies/${movie.id}`}> {movie.name}
             </Link>
           </li>
           )}
         </ul>
         <h3>Television Shows:</h3>
         <ul>
         {this.state.allTelevision.map((television, index) =>
         <li key={ index}>
           <Link to={`/television/${television.id}`}> {television.name}
           </Link>
         </li>
         )}
         </ul>
       <Switch>
         <Route
          path="/movies/:id"
          render={ (props) => <Movie {...props} movies={ this.state.allMovies} />}
         />
         <Route
          path="/television/:id"
          render={ (props) => <Television {...props} television={ this.state.allTelevision} />}
         />
       </Switch>
     </div>
   </Router>

  </>
  );
}
}

export default App;
