import React, { Component } from 'react';

class HeaderSection extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light d-flex">
        <a className="navbar-brand" href="#">
          <img
            src="../../images/Mining4Charity%20Logo.svg"
            width="200"
            height="130"
            className="d-inline-block align-top"
            alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">How it works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Our mission</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Donate</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Our Supporters</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderSection;
