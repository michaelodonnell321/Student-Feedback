import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          <Route path='/' exact component={Feeling}/>
          <Route path='/understand' component={Understand}/>
          <Route path='/supported' component={Supported}/>
          <Route path='/comments' component={Comments}/>
          <Route path='/review' component={Review}/>
          <Route path='/success' component={Success}/>
          <Route path='/admin' component={Admin}/>
        </div>
      </Router>
    );
  }
}

export default App;
