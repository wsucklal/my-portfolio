import React from 'react';
import './contact.scss';

const Contact = () => {

      // //fading in and out
      // const observerOptions = {
      //   root: null,
      //   threshold: 0.7,
      //   rootMargin: "0px",
      // };  
    
      // function observerCallback(entries, observer) {
      //   entries.forEach(entry => {
      //     if (entry.isIntersecting) {
      //       // fade in observed elements that are in view
      //       entry.target.classList.replace('fadeOut', 'fadeIn');
      //     } else {
      //       // fade out observed elements that are not in view
      //       entry.target.classList.replace('fadeIn', 'fadeOut');
      //     }
      //   });
      // }
    
      // const observer = new IntersectionObserver(observerCallback, observerOptions);
    
      // const fadeElms = document.querySelectorAll('.section');
      // fadeElms.forEach(el => observer.observe(el));

  return(
  <div id="Contact" className="Contact" data-testid="Contact">
    <section className="section fadeIn">
    <div className="contact-header contact-content">
        <div className="contact-header-content">
          Contacts
        </div>
    </div>
    <div className="contact-link contact-content">
      <div className="contact-link-content">
        <div className=" contact-link-pic">
          <img alt="" src="/assets/images/linkedInLogo.png"></img>
        </div>
        <a href='https://www.linkedin.com/in/warren-sucklal/' target="_blank" rel="noreferrer" className="contact-link-text">
          LinkedIn
        </a>
      </div>
      <div className="contact-link-content">
        <div className=" contact-link-pic">
          <img alt="" src="/assets/images/Mail.png"></img>
        </div>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=warrensucklal@gmail.com" target="_blank" rel="noreferrer" className=" contact-link-text">
          Send An Email
        </a>
      </div>
      <div className="contact-link-content">
        <div className=" contact-link-pic">
          <img alt="" src="/assets/images/Github.png"></img>
        </div>
        <a href='https://github.com/wsucklal' target="_blank" rel="noreferrer" className="  contact-link-text">
          Github
        </a>
      </div>
    </div>
    </section>
  </div>
)};

Contact.defaultProps = {};

export default Contact;
