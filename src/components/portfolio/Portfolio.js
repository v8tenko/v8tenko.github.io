import React from 'react'
import './Portfolio.css'
import ProjectList from "./resume-list/PorjectList";
import CurrentProjectProvider from "../../providers/CurrentProjectProvider";
import Title from "../titles/TItle";

export default function Portfolio() {

  const typesList = ['all', 'web', 'mobile', 'backend']

  return (
    <section>
      <div id="portfolio">
        <Title> portfolio </Title>
        <CurrentProjectProvider>
          <ProjectList typesList={typesList}/>
        </CurrentProjectProvider>
      </div>
    </section>
  )
}
