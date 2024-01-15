import React from 'react';
import './academic-course.scss';
import CourseList from './course-list/course-list'

const AcademicCourse = () => {
  
  const [open2023, setOpen2023] = React.useState(false);
  const [open2021, setOpen2021] = React.useState(false);
  const [open2020, setOpen2020] = React.useState(false);

  const handleOpen2023 = () => {
    setOpen2023(!open2023);
   // setOpen2022(false);
    setOpen2021(false);
    setOpen2020(false);
  };

  const handleOpen2021 = () => {
    setOpen2021(!open2021);
    setOpen2023(false);
   // setOpen2022(false);
    setOpen2020(false);

  };
  const handleOpen2020 = () => {
    setOpen2020(!open2020);
    setOpen2023(false);
   // setOpen2022(false);
    setOpen2021(false);

  };

    // //fading in and out
    // const observerOptions = {
    //   root: null,
    //   threshold: 0.5,
    //   rootMargin: "0px",
    // };  
  
    // function observerCallback(entries, observer) {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       // fade in observed elements that are in view
    //       entry.target.classList.replace('fadeOut', 'fadeIn');
    //     } else {
    //       // fade out observed elements that are not in view
    //       entry.target.classList.replace('fadeIn', 'fadeOut');
    //     }
    //   });
    // }
  
    // const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // const fadeElms = document.querySelectorAll('.section');
    // fadeElms.forEach(el => observer.observe(el));

  return(
    <div id="AcademicCourse" className="AcademicCourse" data-testid="AcademicCourse">
      <section className ="section fadeIn">
      <div className="academic-header academic-content">
        <div className="academic-header-content">
          Academic Courses
        </div>
        <div className="academic-header-desc"> 
          Here are a few of the most relavent courses I've taken over the years in my undergraduate degree. Each course card is linked to the course information if you'd like to learn more about details of the course. 
        </div>
      </div>
      <div className="academic-courses academic-content">
        <div className="academic-courses-content">
        <div className="academic-courses-header" onClick={handleOpen2023}>2023 <img alt="" className={open2023? 'selected': null} src="/assets/images/dropdown.png"></img></div>
            {open2023 ? <CourseList year= {2023}/> : <div></div>}
        </div>
        <div className="academic-courses-content">
        <div className="academic-courses-header" onClick={handleOpen2021}>2021 <img img alt="" className={open2021? 'selected': null} src="/assets/images/dropdown.png"></img></div>
            {open2021 ? <CourseList year= {2021}/> : <div></div>}
        </div>
        <div className="academic-courses-content">
        <div className="academic-courses-header" onClick={handleOpen2020}>2020 <img img alt="" className={open2020? 'selected': null} src="/assets/images/dropdown.png"></img></div>
            {open2020 ? <CourseList year= {2020}/> : <div></div>}
        </div>
        {/* <div className="academic-courses-content academic-courses-header">
        <div onClick={handleOpen2020}>2019 <img className={open2020? 'selected': null} src="/assets/images/dropdown.png"></img></div>
            {open2020 ? <CourseList year= {2019}/> : <div></div>}
        </div> */}
      </div>
      </section>
    </div>
  );
};

AcademicCourse.defaultProps = {};

export default AcademicCourse;
