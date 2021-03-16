import React, {useContext, useRef, useState} from 'react'
import './ProjectList.css'
import Card from "./card/Card";
import Info from "./card/Info";
import DataHelper from "../../../utils/DataHelper";
import {ProjectContext} from "../../../providers/CurrentProjectProvider";
import {isMobileOnly, isBrowser} from 'react-device-detect'
import FlipMove from 'react-flip-move';


export default function ProjectList({typesList}) {

  const [data, setData] = useState(DataHelper.projects)
  const {currentProject: project, setCurrentProject} = useContext(ProjectContext).project
  const current = useRef(DataHelper.projects[project])
  const [currentType, setCurrentType] = useState('all')


  function changeType(newType) {
    const newProjects = DataHelper.projects.filter(element => newType === 'все' || element.type.includes(newType))
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
                onClick={() => {
                  setCurrentProject(-1)
                  changeType(element)
                }}
                style={{
                  color: currentType === element ? 'white' : ''
                }}
              > #{element} </li>
            })
          }
        </ul>
        <div className="projects-grid">
          <div className="projects-name">
            <FlipMove>
              {
                data.map((element, index) => {
                  return <div key={element.id}>
                    <Card
                      title={element.title}
                      shortDescription={element.shortDescription}
                      onClick={() => {
                        if (isMobileOnly && index === project) {
                          setCurrentProject(-1)
                        } else {
                          if (isBrowser) {
                            current.current = DataHelper.projects[index]
                          }
                          setCurrentProject(index)
                        }
                      }}
                      id={element.id}
                    />
                    {
                      isMobileOnly
                    && index === project
                    && DataHelper.projects[project]
                    && <Info
                      source={DataHelper.projects[project].source}
                      title={DataHelper.projects[project].title}
                      longDescription={DataHelper.projects[project].longDescription}
                      stack={DataHelper.projects[project].stack}
                    />}
                  </div>

                })
              }
            </FlipMove>
          </div>
          {
            isBrowser
            && <Info
              source={current.current.source}
              title={current.current.title}
              longDescription={current.current.longDescription}
              stack={current.current.stack}
            />
          }
        </div>
      </div>
    </div>

  )
}
