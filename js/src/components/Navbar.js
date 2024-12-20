import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Eventify</Link>
      </div>
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create-event">Create Event</Link>
        <Link to="/notifications">Notifications</Link>
      </div>
      <div className="nav-profile">
        <Link to="/profile">
          <img src="/path/to/profile-icon.png" alt="Profile" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


