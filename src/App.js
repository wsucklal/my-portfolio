import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Bio from './components/bio/bio'
function App() {
  return (
    <div className="App">
      <div className="App-Content">
        <Navbar></Navbar>
        <Bio></Bio>
      </div>
    </div>
  );
}

export default App;
