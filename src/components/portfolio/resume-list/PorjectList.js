import React, {createRef, useContext, useState} from 'react'
import './ProjectList.css'
import Card from "./card/Card";
import Info from "./card/Info";
import DataHelper from "../../../utils/DataHelper";
import {ProjectContext} from "../../../providers/CurrentProjectProvider";
import {AnimatedElement} from "./animated-list/animated-element/AnimatedElement";
import {isMobileOnly} from 'react-device-detect'

export default function ProjectList({typesList}) {

  const [data, setData] = useState(DataHelper.projects)
  const [project,] = useContext(ProjectContext)
  const [currentType, setCurrentType] = useState('all')
  const [clickedPosition, setClickedPosition] = useState(-1)

  function changeType(newType) {
    const newProjects = DataHelper.projects.filter(element => newType === 'all' || element.type === newType)
    setCurrentType(newType)
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
                style={{
                  color: currentType === element ? 'white' : ''
                }}
              > #{element} </li>
            })
          }
        </ul>
        <div className="projects-grid">
          <div className="projects-name">
            {
              data.map((element, index) => {
                if (index === clickedPosition) {
                  return (
                    <div key={element.id} onClick={() => setClickedPosition(-1)}>
                      <Card
                        title={element.title}
                        shortDescription={element.shortDescription}
                        id={element.id}
                      />
                      <Info
                        source={DataHelper.projects[project].source}
                        title={DataHelper.projects[project].title}
                        longDescription={DataHelper.projects[project].longDescription}
                        stack={DataHelper.projects[project].stack}
                      />
                    </div>
                  )
                }
                return <AnimatedElement
                  key={element.id}
                  ref={createRef()}
                  onClick={() => {
                    setClickedPosition(index)
                  }}
                  isRemoving={element.isRemoving}
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
          {
            !isMobileOnly && <Info
              source={DataHelper.projects[project].source}
              title={DataHelper.projects[project].title}
              longDescription={DataHelper.projects[project].longDescription}
              stack={DataHelper.projects[project].stack}
            />
          }
        </div>
      </div>
    </div>

  )
}
