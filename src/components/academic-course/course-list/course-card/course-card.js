import React from 'react';
import './course-card.scss';

const CourseCard = (props) => (
  <div className="CourseCard" data-testid="CourseCard">
    <a className='course-header course-card-content' rel="noreferrer" target="_blank" href={props.link}>{props.name}</a>
    {/* <div className='course-info course-card-content'>
      <div className='course-desc course-info-content'><p>{props.desc}</p></div>
      <div className='course-link'>
        <a className='course-link-content course-info-content' href={props.link} target="_blank">Learn more</a>
      </div>
    </div> */}
  </div>
);

CourseCard.defaultProps = {};

export default CourseCard;
