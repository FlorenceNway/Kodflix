import React, { Component } from 'react';

import Details from './Details';
import Gallery from './Gallery';

import './App.css';

import { BrowserRouter as Router, Route} from "react-router-dom"; 


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className='movimgs_container'> 
          <Route exact path='/' component={Gallery}  />
          <Route exact path="/details" component={Details} />
        </div>
      </div>
     </Router> 
    );
  }
}

export default App;
