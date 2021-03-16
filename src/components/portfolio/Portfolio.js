import React from 'react'
import './Portfolio.css'
import ProjectList from "./resume-list/PorjectList";
import CurrentProjectProvider from "../../providers/CurrentProjectProvider";
import Title from "../titles/TItle";
import FetchComponent from "../fetch-component/FetchComponent";

export default function Portfolio() {

  const typesList = ['все', 'web', 'mobile', 'backend']

  return (
    <section>
      <div id="portfolio">
        <Title> портфолио </Title>
        <CurrentProjectProvider>
          <FetchComponent name={'projects'} url={'https://v8tenko-backend.herokuapp.com/projects'}>
            <ProjectList typesList={typesList}/>
          </FetchComponent>
        </CurrentProjectProvider>
      </div>
    </section>
  )
}
