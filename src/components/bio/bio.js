import React from 'react';
import PropTypes from 'prop-types';
import './bio.scss';




const Bio = () => (
  <div id="Bio" className="Bio" data-testid="Bio">
    <div className="bio-pic bio-content">
      <div className="bio-pic-content">
        <img src="https://media.licdn.com/dms/image/C5603AQFgU7JukkXBbw/profile-displayphoto-shrink_400_400/0/1609145713918?e=1705536000&v=beta&t=VqeYvdOZDJ2QI8NjqgZczpQC6EppHjDOhe08ndhuhFQ"></img>
      </div>
    </div>
    <div className="bio-text bio-content">
      <div className="bio-text-content">
        <p>Hi, I'm Warren! I am a young software engineer student who is passionate about critical thinking, reasoning and coding. My brain is always trying to solve problems thanks to a curious mind. I have always been a logical, hands on, problem solver since I was about 5 years old starting with Lego, sports, math, science, and now my life long passion as a software engineer. Hope you enjoy the rest of my page and feel free to <a className='bio-text-reachout' href='#Contact'>reach out to me</a> if you have any questions. You can find my resume just below which has more details about my experiences. Thanks again!</p>
        <div className='bio-text-btn'>
          <a href="/assets/documents/Resume-Warren.pdf" download = "Resume-Warren.pdf" id="" className="bio-btn-content">
            Resume - PDF 
          </a>
        </div>
      </div>
    </div>
  </div>
);

Bio.propTypes = {};

Bio.defaultProps = {};

export default Bio;
