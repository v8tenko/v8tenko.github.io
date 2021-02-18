import './App.css';
import React from "react";
import Home from './components/Home/Home'
import Portfolio from "./components/portfolio/Portfolio";
import Education from "./components/experience/Education";

function App() {

  const menuElements = [
    'v8tenko',
    'portfolio',
    'experience',
    'contact'
  ]

  return (
    <div className=".App">
        <Home menuItems={menuElements}  />
        <Portfolio />
        <Education />
    </div>
  )
}

export default App;
