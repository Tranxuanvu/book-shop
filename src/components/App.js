import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './common/HomePage';
import About from './common/AboutPage';
import Book from './book/BookPage';

const App = (props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Book Shop</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/books">Book</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>

          </div>
        </div>
      </nav>
      {/* Each smaller components */}
      {props.children}

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/books" component={Book}/>
    </div>
  );
};

export default App;
