import React from 'react';
import PropTypes from 'prop-types';
import './navbar.scss';

const Navbar = () => (
  <div className="Navbar" data-testid="Navbar">
      <div className="content">
        Warren Sucklal
      </div>
      <div className="content">
        <div id="nav-btn-content" className="nav-btn">
          Who Am I?
        </div>
        <div id="nav-btn-content" className="nav-btn">
          My Experience
        </div>
        <div id="nav-btn-content" className="nav-btn">
          Contact
          </div>
      </div>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
