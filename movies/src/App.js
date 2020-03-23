import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Television from './pages/Television';
import NotFound from './pages/NotFound';


const App = () => {
  return (
   <Router>
     <div>
       <h1>This is our router</h1>
       <nav>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/movie">Movie</Link>
           </li>
           <li>
             <Link to="/television">Television</Link>
           </li>
         </ul>
       </nav>
       <Switch>
         <Route path="/movie" component={ Movie } />
         <Route path="/television" component={ Television } />
         <Route path="/" exact component={ Home } />
         <Route component={ NotFound } />



       </Switch>
     </div>
   </Router>
  );
}

export default App;
