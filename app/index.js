import './css/style.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router';
import TreeTableTest from './tree-table-test';

const App = props =>
  <div>
    <div className="nav">
      <Link to="/">Index</Link>
      <Link to="front">Front</Link>
      <Link to="tree-table">Tree</Link>
    </div>
    {props.children}
  </div>
;

const Front = props =>
  <div>
    <h1>Front page</h1>
  </div>
;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="front" component={Front} />
      <Route path="tree-table" component={TreeTableTest} />
    </Route>
  </Router>
, document.getElementById('root'));
