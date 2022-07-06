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
            calculator
          </Link>
        </li>
        <li>
          <Link to="/quote">
            quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
