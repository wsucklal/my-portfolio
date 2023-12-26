import React from 'react';
import PropTypes from 'prop-types';
import './project.scss';

import ScrollBanner from './scroll-banner/scroll-banner';

const response = await fetch('https://api.github.com/users/wsucklal/repos');
const json = await response.json()

let projList = []

json.forEach((p)=>{
  projList.push({name:p.name,url:p.svn_url,language:p.language, createdAt: p.created_at})
})

const Project = () => (
  <div id="Project" className="Project" data-testid="Project">
    <div className='project-panel'>
      <div className="project-header project-panel-ctnt">
        <div className="project-header-content">
          Projects
        </div>
      </div>
      <div className='project-panel-ctnt project-display-info'>
            These are a few of my projects that I've done over the years. These range from personal projects to projects I've done in school, covering a few different coding languages 
        </div>
      <div className='project-panel-ctnt'>
        <div className='project-display-tech'>
          <div className='project-searchbar'>
            SeachBar
          </div>
          <div>
            Tech Display
          </div>
        </div>
      </div>
      <div className='project-panel-ctnt project-scroll-banner'>
        <div className='project-scroll-banner-ctnt'>
          {<ScrollBanner projects={projList}/>}
        </div>
      </div>
    </div>
  </div>
);

Project.propTypes = {};

Project.defaultProps = {};

export default Project;
