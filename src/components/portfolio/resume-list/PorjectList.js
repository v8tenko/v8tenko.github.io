import React, {createRef, useContext, useRef, useState} from 'react'
import './ProjectList.css'
import Card from "./card/Card";
import Info from "./card/Info";
import DataHelper from "../../../utils/DataHelper";
import {ProjectContext} from "../../../providers/CurrentProjectProvider";
import {AnimatedList} from "./animated-list/AnimatedList";
import {AnimatedElement} from "./animated-list/animated-element/AnimatedElement";

export default function ProjectList({typesList}) {

  const [data, setData] = useState(DataHelper.data)
  const [project,] = useContext(ProjectContext)

  function changeType(newType) {
    const newProjects = DataHelper.data.filter(element => newType === 'all' || element.type === newType)
    setData(newProjects)
  }

  return (
    <div id="projects">
      <div className="content">
        <ul className="types">
          {
            typesList.map(element => {
              return <li
                className="type-element" key={element}
                onClick={() => changeType(element)}
              > #{element} </li>
            })
          }
        </ul>
        <div className="projects-grid">
          <div className="projects-name">
              {
                data.map(element => {
                  return <AnimatedElement
                    key={element.id}
                    ref={createRef()}
                  >
                    <Card
                      title={element.title}
                      shortDescription={element.shortDescription}
                      id={element.id}
                    />
                  </AnimatedElement>
                })
              }
          </div>
          <div>
            <Info
              title={project.title}
              longDescription={project.longDescription}
              source={project.source}
            />
          </div>
        </div>
      </div>
    </div>

  )
}
