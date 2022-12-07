import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Present Picker
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto float-right">
          <li className="nav-item">
            <NavLink to="/login" activeClassName="active">
              <a className="nav-link">Login</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" activeClassName="active">
              <a className="nav-link">Sign Up</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" activeClassName="active">
              <a className="nav-link">Dashboard</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/me" activeClassName="active">
              <a className="nav-link">Profile</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/search" activeClassName="active">
              <a className="nav-link">Search</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/logout" activeClassName="active">
              <a className="nav-link">Logout</a>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;