import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';


ReactDOM.render(
  <Router>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('app')
);
