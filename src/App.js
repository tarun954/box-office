import React from 'react'; 
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import Show from './Pages/Show';

function App() {
  return (
    <Switch>
       <Route exact path="/"><Home/></Route>
       <Route exact path="/starred"><Starred /></Route>
       <Route exact path="/show/:id">
           <Show  />
          </Route>
       <Route>
         <div>
           404 Not Found
           </div>
         </Route>
    </Switch>
  );
}

export default App;
