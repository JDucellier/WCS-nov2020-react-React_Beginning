import React from 'react';
import logo from '../logo.svg';
import './Navbar.css';

function Navbar(){


  return (
    <nav>
      <img src={logo} className="App-logo" alt="logo" />
      <a className="App-link" href="https://fr.wikipedia.org/wiki/Les_Simpson" title="Redirect to the Wikipedia Simpson's TV Show page">Simpson Quotes</a>
    </nav>
  )
}

export default Navbar;