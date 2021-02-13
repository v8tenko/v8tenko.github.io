import './App.css';
import React from "react";
import Home from './components/Home/Home'
import Portfolio from "./components/portfolio/Portfolio";

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
        <Portfolio/>
    </div>
  )
}

export default App;
