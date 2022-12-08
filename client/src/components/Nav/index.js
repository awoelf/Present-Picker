import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Present Picker{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-gift"
          viewBox="0 0 16 16"
        >
          <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
        </svg>
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
            <NavLink to="/" activeClassName="active">
              <a className="nav-link">Home</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard" activeClassName="active">
              <a className="nav-link">Dashboard</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/me" activeClassName="active">
              <a className="nav-link">Profile</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/list-page" activeClassName="active">
              <a className="nav-link">List Page</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" activeClassName="active">
              <a className="nav-link">Sign Up</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" activeClassName="active">
              <a className="nav-link">Login</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/logout" activeClassName="active">
              <a className="nav-link">Logout</a>
              {/* Add logout functionality. Send user back to homepage. */}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
