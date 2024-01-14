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
    case 2021:
      courses = coursesJOSN.courses2021.courses
    break
    case 2020:
      courses = coursesJOSN.courses2020.courses
    break
  }
  courses.forEach((c) =>{
    courseList.push(<CourseCard name={c.name} desc={c.desc} link={c.link} />)
  })

  //Split Array in half for display
  let firstRow =  courseList.splice(0,courseList.length/2)
  let secondRow =  courseList.splice(courseList.length/2,courseList.length)

  return(
    <div className="CourseList" data-testid="CourseList">
      <div className="courseList-content courseList-firstrow">{firstRow}</div>
      <div className="courseList-content courseList-secondrow">{secondRow}</div>
    </div>
  );
};

CourseList.propTypes = {};

CourseList.defaultProps = {};

export default CourseList;
