import React, {useContext, useEffect, useState} from 'react'
import './Card.css'
import {ProjectContext} from "../../../../providers/CurrentProjectProvider";
import DataHelper from "../../../../utils/DataHelper";


export default function Card({title, shortDescription, id}) {

  const [project, setCurrentProject] = useContext(ProjectContext)
  const [colored, setColored] = useState(DataHelper.data[project].id === id)

  useEffect(() => {
    const callback = () => {
      setCurrentProject(DataHelper.data.findIndex(element => element.id === id))
    }
    const element = document.querySelector(`#${id}`)
    element.addEventListener('click', callback)

    return () => element.removeEventListener('mouseleave', callback)
  }, [id, setCurrentProject, title, shortDescription])

  useEffect(() => setColored(DataHelper.data[project].id === id), [id, project])

  return (
    <div
        className={`card${colored ? " colored" : ''}`}
        id={id}
    >
        <p className="title"> {title} </p>
        <p> {shortDescription} </p>
    </div>
  )
}
