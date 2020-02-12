import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Films from './Films/Films'
import City from './City/City'
import Film from './Film/Film'
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
              <Route path="/films" component={Films}></Route>
              <Route path="/city" component={City}></Route>
              <Route path="/film/:id" component={Film}></Route>
              <Redirect from="/" to="/films/nowPlaying"></Redirect>
          </Switch>        
        </Router>     
    </div>
  );
}

export default App;
