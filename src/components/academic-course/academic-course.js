import React from 'react';
import PropTypes from 'prop-types';
import './academic-course.scss';

const AcademicCourse = () => {
  
  const [open2023, setOpen2023] = React.useState(false);
  const [open2022, setOpen2022] = React.useState(false);

  const handleOpen2023 = () => {
    setOpen2023(!open2023);
  };
  const handleOpen2022 = () => {
    setOpen2022(!open2022);
  };

  return(
    <div className="AcademicCourse" data-testid="AcademicCourse">
      <div className="academic-header academic-content">
        <div className="academic-header-content">
          Academic Courses
        </div>
      </div>
      <div className="academic-courses academic-content">
      <div className="academic-courses-content">
        <div onClick={handleOpen2023}>2023 <img className={open2023? 'selected': null} src="/assets/images/dropdown.png"></img></div>
            {open2023 ? <div>Is Open</div> : <div></div>}
        </div>
        <div className="academic-courses-content">
        <div onClick={handleOpen2022}>2022 <img className={open2022? 'selected': null} src="/assets/images/dropdown.png"></img></div>
            {open2022 ? <div>Is Open</div> : <div></div>}
        </div>
      </div>
    </div>
  );
};

AcademicCourse.propTypes = {};

AcademicCourse.defaultProps = {};

export default AcademicCourse;
