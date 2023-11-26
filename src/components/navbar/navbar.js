import React from 'react';
import PropTypes from 'prop-types';
import './navbar.scss';

const Navbar = () => (
  <div className="Navbar" data-testid="Navbar">
      <div id="" className="nav-header nav-content">
        <div className="nav-header-content">Warren Sucklal</div>
      </div>
      <div id="" className="nav-btns-panel nav-content">
        <a id="" href='#Bio' className="nav-btn-content nav-btn">
          Who Am I?
        </a>
        <a id="" href='#Project' className="nav-btn-content nav-btn">
          My Experience
        </a>
        <a id="" href='#Contact' className="nav-btn-content nav-btn">
          Contact
        </a>
      </div>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
