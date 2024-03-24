//import logo from './logo.svg';

import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import OurService from './components/OurService';
import OurTeam from './components/OurTeam';
import Contacts from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <nav>
          <div class="nav-wrapper indigo darken-4">
          <ul id="nav-mobile" class="right grey darken-4">
            <li>
              <Link to="/">Home</Link> {/* Use relative path */}
            </li>
            <li>
              <Link to="/about">About</Link> {/* Use relative path */}
            </li>
            <li>
              <Link to="/ourservice">OurService</Link> {/* Use relative path */}
            </li>
            <li>
              <Link to="/ourteam">OurTeam</Link> {/* Use relative path */}
            </li>
            <li>
              <Link to="/contacts">Contacts</Link> {/* Use relative path */}
            </li>
          </ul>
        </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />   
          <Route path="/ourservice" element={<OurService />} />    
          <Route path="/ourteam" element={<OurTeam />} />  
          <Route path="/contacts" element={<Contacts />} />  
        </Routes>
        </header>
    </div>
    </Router>
  );
}

export default App;




/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/