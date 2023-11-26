import React from 'react';
import PropTypes from 'prop-types';
import './contact.scss';

const Contact = () => (
  <div id="Contact" className="Contact" data-testid="Contact">
    <div className="contact-header contact-content">
        <div className="contact-header-content">
          Contacts
        </div>
    </div>
    <div className="contact-link contact-content">
      <div className="contact-link-content">
        <div className=" contact-link-pic">
          <img src="/assets/images/linkedInLogo.png"></img>
        </div>
        <a href='https://www.linkedin.com/in/warren-sucklal/' className="contact-link-text">
          LinkedIn
        </a>
      </div>
      <div className="contact-link-content">
        <div className=" contact-link-pic">
          <img src="/assets/images/Mail.png"></img>
        </div>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=warrensucklal@gmail.com" className=" contact-link-text">
          Send An Email
        </a>
      </div>
      <div className="contact-link-content">
        <div className=" contact-link-pic">
          <img src="/assets/images/Github.png"></img>
        </div>
        <a href='https://github.com/wsucklal' className=" contact-link-text">
          Github
        </a>
      </div>
    </div>
  </div>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
