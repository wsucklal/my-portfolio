import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Bio from './components/bio/bio';
import Project from './components/project/project'
import Academics from './components/academic-course/academic-course'
import Contact from './components/contact/contact';
import Footer from './components/footer/footer'
import { useEffect } from 'react';

function App() {

   useEffect(()=>{
      //fading in and out
      const observerOptions = {
        root: null,
        threshold: 0.5,
        rootMargin: "0px",
      };  
    
      function observerCallback(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // fade in observed elements that are in view
            entry.target.classList.replace('fadeOut', 'fadeIn');
          } else {
            // fade out observed elements that are not in view
            entry.target.classList.replace('fadeIn', 'fadeOut');
          }
        });
      }
    
      const observer = new IntersectionObserver(observerCallback, observerOptions);
    
      const fadeElms = document.querySelectorAll('.section');
      fadeElms.forEach(el => observer.observe(el));
   },[])  
  
  return (
    <div className="App">
      <div className="App-Content">
        <Navbar></Navbar>
        <Bio></Bio>
        <Project></Project>
        <Academics></Academics>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
