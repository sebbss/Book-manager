import React, { Component } from "react";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark info-color container-fluid">
          <a className="navbar-brand" href="/">
            Book Manager
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-4"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
