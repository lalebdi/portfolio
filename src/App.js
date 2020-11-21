import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <h1> Cocked, Locked and ready to Rock</h1>
      <div>
      <Switch>
      <Route exact path="/" component={ Home } >
      </Route>
      <Route path="/about" component={ About } >
      </Route>
      <Route path="/contact" component={ Contact } >
      </Route>
      <Route component={ NotFound }>

      </Route>
      </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
