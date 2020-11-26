import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Blog from './Blog';
import PostDetails from './PostDetails';

class App extends Component {

  state = {};

  render(){
 
    return(
      <BrowserRouter>
        <Router>
          <Switch>
            
            <Route path="/post/:id" component={PostDetails}>
            </Route> 
            <Route path="/" component={Blog}>
            </Route>
          </Switch>
        </Router>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


