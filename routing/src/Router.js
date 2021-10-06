import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Photos from './Components/Players';
import App from './App';
import Navigation from './Components/Navigation';
import Players from './Components/Players';
import Lampard from './assets/images/Lampard.jpg';
import Messi from './assets/images/Messi.jpg';
import Neymar from './assets/images/Neymar.jpg';
import Pogba from './assets/images/Pogba.jpg';
import Ronaldo from './assets/images/Ronaldo.jpg';

class Router extends Component {

  state={
    players:[
      {
        'id':1,
        'name':'Ronaldo',
        'image':'https://www.juventus.com/images/image/private/t_portrait_mobile/dev/t5mex3dyn30xi3ox6ii5.jpg'
      },
      {
        'id':2,
        'name':'Messi',
        'image': 'https://s.france24.com/media/display/74b21b90-1d2c-11ec-bcd6-005056bf30b7/w:1280/p:16x9/ecacab5c0e4dde620255e0a90f0472f8f20c545b.webp'
      },
      {
        'id':3,
        'name':'pogba',
        'image':'https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2021/08/18161653/Paul-Pogba-Manchester-United-5.jpg'
      },
      {
        'id':4,
        'name':'Lampard',
        'image':'https://m.media-amazon.com/images/M/MV5BNmU1NzhkODYtZWQwMC00YzNkLTlhNDgtOWRmNWE2ZDI4Y2ZiXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg'
      },
      { 
        'id':5,
        'name':'Neymar',
        'image':'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/09/12/57778.jpg'

      }
    ]
  }
  render() {
    return(
    <div>
      <Navigation/>
      <Switch>
     
     <Route exact path="/" component={App}/>
     <Route exact path="/about" component={About} />
     <Route exact path="/contact" component={Contact} />
     <Route exact path="/players" render={(props) => <Players {...props}players={this.state.players} />}/>
   </Switch>
    </div>
     )  
  }
    
}



export default Router;
