import React from 'react';
import PropTypes from 'prop-types';
import './contact.scss';

const Contact = () => (
  <div className="Contact" data-testid="Contact">
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
        <div className="contact-link-text">
          LinkedIn
        </div>
      </div>
      <div className="contact-link-content">
        <div className=" contact-link-pic">
          <img src="/assets/images/Mail.png"></img>
        </div>
        <div className=" contact-link-text">
          Send An Email
        </div>
      </div>
      <div className="contact-link-content">
        <div className=" contact-link-pic">
          <img src="/assets/images/Github.png"></img>
        </div>
        <div className=" contact-link-text">
          Github
        </div>
      </div>
    </div>
  </div>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
