import React from 'react';
import PropTypes from 'prop-types';
import './project.scss';

const Project = () => (
  <div id="Project" className="Project" data-testid="Project">
    <div className='project-panel'>
      <div className='project-panel-ctnt'>
        <div className='project-display'>
          Test
        </div>
        <div className='project-display-tech'>
          Test
        </div>
      </div>
      <div className='project-panel-ctnt'>
        <div className='project-display-search'>
            Test
        </div>
        <div className='project-display-list'>
            Test
        </div>
      </div>
    </div>
  </div>
);

Project.propTypes = {};

Project.defaultProps = {};

export default Project;
