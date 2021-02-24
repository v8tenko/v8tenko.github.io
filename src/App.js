import './App.css';
import React from "react";
import Home from './components/Home/Home'
import Portfolio from "./components/portfolio/Portfolio";
import Education from "./components/experience/Education";
import Contact from "./components/contact/Contact";
import {isMobileOnly} from 'react-device-detect';
import home from './img/home.jpg';
import CurrentProjectProvider from "./providers/CurrentProjectProvider";
import ProjectList from "./components/portfolio/resume-list/PorjectList";

function App() {

  const menuElements = [
    'v8tenko',
    'portfolio',
    'education',
    'experience',
    'contact'
  ]

  const typesList = ['all', 'web', 'mobile', 'backend']


  if (isMobileOnly) {
    import('./mobile.css')
  }

  if (isMobileOnly) {
    return (
      <div
        className="App">
        <section>
          <footer>
            <p> v8tenko </p>
            <p> menu </p>
          </footer>
          <div className="content">
            <h1>hi, I am </h1>
            <h1> Gleb Voitenko </h1>
            <p> and I'm a software engineer </p>
          </div>
          <div
            style={{
              backgroundImage: `url(${home})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }}
            className="home-image"
          />
        </section>
        <section>
          <CurrentProjectProvider>
            <ProjectList typesList={typesList}/>
          </CurrentProjectProvider>
        </section>
      </div>
    )
  }

  return (
    <div className=".App">
      <Home menuItems={menuElements}/>
      <Portfolio/>
      <Education/>
      <Contact/>
    </div>
  )
}

export default App;
