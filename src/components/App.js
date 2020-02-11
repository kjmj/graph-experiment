import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import '../style/App.css';
import NavBar from "./navigation/NavBar"
import Routes from "./navigation/Routes"

function App() {
  return (
      <Router>
        <div>
          <NavBar/>
          <Routes/>
        </div>
      </Router>
  );
}

export default App;
