import React from 'react'
import './Portfolio.css'
import ProjectList from "./resume-list/PorjectList";
import CurrentProjectProvider from "../../providers/CurrentProjectProvider";

export default function Portfolio() {

  const typesList = ['all', 'web', 'mobile', 'backend']

  return (
    <section>
      <div id="portfolio-before"/>
      <div id="portfolio">
        <h1> portfolio </h1>
        <CurrentProjectProvider>
          <ProjectList typesList={typesList}/>
        </CurrentProjectProvider>
      </div>
    </section>
  )
}
