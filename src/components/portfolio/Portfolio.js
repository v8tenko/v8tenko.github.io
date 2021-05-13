import React from 'react'
import './Portfolio.css'
import ProjectList from "./resume-list/PorjectList";
import CurrentProjectProvider from "../../providers/CurrentProjectProvider";
import Title from "../titles/TItle";

export default function Portfolio() {

  const typesList = ['все', 'web', 'mobile', 'backend']

  return (
    <section style={{
      minHeight: '90vh'
    }}>
      <div id="portfolio">
        <Title> портфолио </Title>
        <CurrentProjectProvider>
            <ProjectList typesList={typesList}/>
        </CurrentProjectProvider>
      </div>
    </section>
  )
}
