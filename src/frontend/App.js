import React, { Component } from 'react';

import Details from './Detail/Details.js';
import Gallery from './Gallery.js';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import NotFound from './NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className='movimgs_container'> 
          <Switch>
            <Route exact path='/' component={Gallery}  />
            <Route exact path='/not-found'  component={NotFound} />
            <Route exact path="/:movieid" component={Details} />
          </Switch>  
        </div>
      </div>
     </Router> 
    );
  }
}

export default App;
