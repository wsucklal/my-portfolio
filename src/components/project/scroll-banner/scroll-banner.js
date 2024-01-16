// import React from 'react';
 import './scroll-banner.scss';
 import ScrollCard from './scroll-card/scroll-card'


// const ScrollBanner = (props) => {

//   let projectList = []

//   props.projects.forEach((p)=>{
//     projectList.push(<ScrollCard name={p.name} createdAt={p.createdAt} language = {p.language} url={p.url}></ScrollCard>)
//   })

//   return (
//     <div className="ScrollBanner" data-testid="ScrollBanner">
//       <div className="scroll-banner-ctnt">
//       {projectList}
//       </div>
//     </div>
//   );
// };


// ScrollBanner.defaultProps = {};

// export default ScrollBanner;

// Carousel.js
import React, { useState, useEffect } from 'react';
//import './Carousel.css'; // Import your CSS file

const ScrollBanner = (props) => {

  let projectList = []

  props.projects.forEach((p)=>{
    projectList.push(<ScrollCard name={p.name} createdAt={p.createdAt} language = {p.language} url={p.url}></ScrollCard>)
  })

  const items = projectList; 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000); 

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, items.length]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={index}
            //className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBanner;
