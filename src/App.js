import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

function App() {
  return (
      <Router >
        <div >
        <Switch>
          <Route exact path="/" component={PageOne}/>
          <Route exact path="/pagetwo" component={PageTwo}/>        
        </Switch>
        </div>

      </Router>
  );
}

export default App;
