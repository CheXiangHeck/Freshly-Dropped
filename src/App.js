import logo from './logo.svg';
import './App.css';
import Tab from './Tab/Tab';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './Homepage/Homepage';
import Favorited from './Favorited/Favorited';
import Shopping from './Shopping/Shopping';
import About from './About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/Favorited" element={<Favorited/>}/>
          <Route path="/Shopping" element={<Shopping/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
