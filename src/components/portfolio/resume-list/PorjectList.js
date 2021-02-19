import React, {createRef, useContext, useReducer, useState} from 'react'
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
  const [currentType, setCurrentType] = useState('all')

  function changeType(newType) {
    const newProjects = DataHelper.data.filter(element => newType === 'all' || element.type === newType)
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
                data.map(element => {
                  return <AnimatedElement
                    key={element.id}
                    ref={createRef()}
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
              <Info
                source={DataHelper.data[project].source}
                title={DataHelper.data[project].title}
                longDescription={DataHelper.data[project].longDescription}
              />
            }
        </div>
      </div>
    </div>

  )
}
