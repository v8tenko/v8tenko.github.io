import React, {useContext, useEffect} from 'react'
import './Card.css'
import {ProjectContext} from "../../../../providers/CurrentProjectProvider";
import DataHelper from "../../../../utils/DataHelper";


export default function Card({title, shortDescription, id}) {

  const [, setCurrentProject] = useContext(ProjectContext)

  useEffect(() => {
    const callback = () => {
      setCurrentProject(DataHelper.data.findIndex(element => element.id === id))
    }
    const element = document.querySelector(`#${id}`)
    element.addEventListener('click', callback)

    return () => element.removeEventListener('mouseleave', callback)
  }, [id, setCurrentProject, title, shortDescription])

  return (
    <div className="card" id={id}>
        <p className="title"> {title} </p>
        <p> {shortDescription} </p>
    </div>
  )
}
