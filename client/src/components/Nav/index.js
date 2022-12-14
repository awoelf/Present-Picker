import React from "react";
import { NavLink } from "react-router-dom";
import Auth from "../../utils/auth";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-lg navbar-light bg-light mx-2 sticky-top"
    >
      <Navbar.Brand className="navbar-brand" href="/">
        Present Picker{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-gift"
          viewBox="0 0 16 16"
        >
          <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
        </svg>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/" activeclassname="active">
            <a className="nav-link" href="/">
              Home
            </a>
          </NavLink>
          <NavLink to="/dashboard" activeclassname="active">
            <a className="nav-link" href="/dashboard">
              Dashboard
            </a>
          </NavLink>
          <NavLink to="/me" activeclassname="active">
            <a className="nav-link">Profile</a>
          </NavLink>
          <NavLink to="/list-page" activeclassname="active">
            <a className="nav-link" href="/list-page">
              List Page
            </a>
          </NavLink>
          {Auth.loggedIn() ? (
            <>
              <NavLink activeclassname="active" to="/me" className={"mt-2"}>
                Logged in as {Auth.getProfile().data.email}
                <a
                  className="nav-link d-inline mt-3"
                  onClick={logout}
                  href="/me"
                >
                  Logout
                </a>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" activeclassname="active" className={"mt-2"}>
                <a className="nav-link d-inline" href="/login">
                  Login
                </a>
              </NavLink>
              <NavLink to="/signup" activeclassname="active" className={"mt-2"}>
                <a className="nav-link d-inline" href="/signup">
                  Sign Up
                </a>
              </NavLink>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
