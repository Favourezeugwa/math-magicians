import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <div className="navLogo">
        <h1>Math Magicians</h1>
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/calculator">
            Calculator
          </Link>
        </li>
        <li>
          <Link to="/quote">
            Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
