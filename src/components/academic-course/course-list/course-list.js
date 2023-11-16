import React from 'react';
import PropTypes from 'prop-types';
import './course-list.scss';
import coursesJOSN from './courses.json'
import CourseCard from './course-card/course-card'

const CourseList = (props) => { 

  let courseList = []
  let courses
  switch(props.year){
    case 2023:
      courses = coursesJOSN.courses2023.courses
    break;
    case 2022:
      courses = coursesJOSN.courses2022.courses
    break
  }
  courses.forEach((c) =>{
    courseList.push(<CourseCard name={c.name} desc={c.desc} link={c.link} />)
  })

  return(
    <div className="CourseList" data-testid="CourseList">
      {courseList}
    </div>
  );
};

CourseList.propTypes = {};

CourseList.defaultProps = {};

export default CourseList;
