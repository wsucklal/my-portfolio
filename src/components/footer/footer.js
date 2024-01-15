import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';

const Footer = () => (
  <div className="Footer" data-testid="Footer">
    <div className='footer-content footer-prj'>
      <div className='footer-prj-hdr'>
        What did I use to build this?
      </div>
      <div className='footer-prj-stack'>
        <div className='footer-prj-stack-ctnt'>
          <a  target="_blank" href='https://react.dev/'>React.js</a>
        </div>
        <div className='footer-prj-stack-ctnt'>
          <a  target="_blank" href='https://www.figma.com/file/TCZWWVpMzsoAtYVERRO4FR/Portfolio-Design?type=design&mode=design&t=GVcu4f5vBETU7Xmr-1'>
            Figma Design
          </a>
        </div>
        <div className='footer-prj-stack-ctnt'>
          <a  target="_blank" href='https://github.com/wsucklal/my-portfolio'>Github Repository</a>
        </div>
      </div>
    </div>
    <div className='footer-content footer-copyright'>
        <p>&copy; 2023 - Warren Sucklal</p>
    </div>
  </div>
);


Footer.defaultProps = {};

export default Footer;
