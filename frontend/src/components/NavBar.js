import React, { Component } from "react";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark info-color container-fluid">
          <a className="navbar-brand" href="/">
            Book Manager
          </a>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-4"
          >
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="/authors">
                  authors
                </a>
              </li>
            <li className="nav-item">
                <a className="nav-link" href="/">
                  books
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add-book">
                  new book
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add-author">
                  new author
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
