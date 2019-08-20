import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  renderLinks = () => {
    return (
      <li className="nav-item d-sm-inline-block">
        <Link to="/addpost" className="nav-link">
          <i className="fas fa-pencil-alt" /> Add Post
        </Link>
      </li>
    );
  };
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top py-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <h3 className="mb-0">UNSHIFT Blog</h3>
          </Link>
          <button
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
