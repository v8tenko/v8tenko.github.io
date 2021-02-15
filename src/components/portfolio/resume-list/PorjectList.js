import React, {createRef, useContext, useRef, useState, useReducer} from 'react'
import './ProjectList.css'
import Card from "./card/Card";
import Info from "./card/Info";
import DataHelper from "../../../utils/DataHelper";
import {ProjectContext} from "../../../providers/CurrentProjectProvider";
import {AnimatedElement} from "./animated-list/animated-element/AnimatedElement";

export default function ProjectList({typesList}) {

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [data, setData] = useState(DataHelper.data)
  const [project,] = useContext(ProjectContext)

  function changeType(newType) {
    const newProjects = DataHelper.data.filter(element => newType === 'all' || element.type === newType)
    data.forEach(element => {
      element.isRemoving = !newProjects.includes(element)
    })
    forceUpdate()
    setTimeout(() => {
      setData(newProjects)
    }, 200)
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
                    isRemoving={element.isRemoving ?? false}
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
