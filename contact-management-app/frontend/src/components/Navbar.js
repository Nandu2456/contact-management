import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Contact Manager</h1>
      <ul className="nav-links">
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/add">Add Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
