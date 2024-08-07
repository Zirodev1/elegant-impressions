import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Elegant Impression</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapes navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
