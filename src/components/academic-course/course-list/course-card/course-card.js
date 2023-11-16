import React from 'react';
import PropTypes from 'prop-types';
import './course-card.scss';

const CourseCard = (props) => (
  <div className="CourseCard" data-testid="CourseCard">
    <div className='course-header course-card-content'>{props.name}</div>
    <div className='course-info course-card-content'>
      <div className='course-desc course-info-content'>{props.desc}</div>
      <div className='course-link'>
        <a className='course-link-content course-info-content' href={props.link} target="_blank">Learn more</a>
      </div>
    </div>
  </div>
);

CourseCard.propTypes = {};

CourseCard.defaultProps = {};

export default CourseCard;