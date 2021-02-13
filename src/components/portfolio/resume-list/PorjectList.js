import React, {useContext, useRef} from 'react'
import './ProjectList.css'
import Card from "./card/Card";
import Info from "./card/Info";
import DataHelper from "../../../utils/DataHelper";
import {ProjectContext} from "../../../providers/CurrentProjectProvider";

export default function ProjectList({typesList}) {

  const data = DataHelper.data;
  const [project, ] = useContext(ProjectContext)
  console.log(project)

  return (
      <div id="projects">
        <div className="content">
          <ul className="types">
            {
              typesList.map(element => {
                return <li className="type-element" key={element}> #{element} </li>
              })
            }
          </ul>
          <div className="projects-grid">
            <div className="projects-name">
              {
                data.map(element => {
                  return <Card
                    title={element.title}
                    shortDescription={element.shortDescription}
                    id={element.id}
                    key={element.id}
                  />
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
