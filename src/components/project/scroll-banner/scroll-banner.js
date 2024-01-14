import React from 'react';
import PropTypes from 'prop-types';
import './scroll-banner.scss';
import ScrollCard from './scroll-card/scroll-card'


const ScrollBanner = (props) => {

  let projectList = []

  props.projects.forEach((p)=>{
    projectList.push(<ScrollCard name={p.name} createdAt={p.createdAt} language = {p.language} url={p.url}></ScrollCard>)
  })

  return (
    <div className="ScrollBanner" data-testid="ScrollBanner">
      <div className="scroll-banner-ctnt">
      {projectList}
      </div>
    </div>
  );
};


ScrollBanner.defaultProps = {};

export default ScrollBanner;
