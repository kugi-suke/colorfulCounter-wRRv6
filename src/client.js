import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from './index';
import App from './App';
import App2 from './App2';
import App3 from './App3';

const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Index>
      <Route exact path="/" component={App}></Route>
      <Route path="/blue" component={App2}></Route>
      <Route path="/yellow" component={App3}></Route>
    </Index>
  </Router>,
root);