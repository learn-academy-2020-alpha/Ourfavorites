import React from "react"
import Breaking from './Breaking';
import How from './How';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
import NotFound from './NotFound';

const Television = () => {
   return(
     <>
       <h1>Television</h1>
         <ol>
         <li>How I met your mother</li>
         <li>Breaking Bad</li>
         <li>Pokemon</li>
         <li>Friends</li>
         <li>The Good Place</li>
         <li>One outs</li>
         <li>Clannad</li>
         <li>Drifters</li>
         </ol>
         <Router>
           <div>

             <nav>
               <ul>
                 <li>
                   <Link to="/How">How I met your mother</Link>
                 </li>
                 <li>
                   <Link to="/Breaking">Breaking Bad</Link>
                 </li>
               </ul>
             </nav>
             <Switch>
               <Route path="/How" component={ How } />
               <Route path="/Breaking" component={ Breaking } />

               <Route component={ NotFound } />



             </Switch>
           </div>
         </Router>
     </>
   )
}
export default Television
