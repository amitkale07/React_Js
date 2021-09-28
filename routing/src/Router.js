import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Photos from './Components/Players';
import App from './App';
import Navigation from './Components/Navigation';

function Router() {
  return (
    <div>
      <Navigation/>
      <Switch>
     
     <Route exact path="/" component={App}/>
     <Route exact path="/about" component={About} />
     <Route exact path="/contact" component={Contact} />
     <Route exact path="/players" component={Photos} />
   </Switch>
    </div>
   
  );
}

export default Router;
