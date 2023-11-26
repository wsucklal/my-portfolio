import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Bio from './components/bio/bio';
import Project from './components/project/project'
import Academics from './components/academic-course/academic-course'
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <div className="App-Content">
        <Navbar></Navbar>
        <Bio></Bio>
        <Project></Project>
        <Academics></Academics>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
