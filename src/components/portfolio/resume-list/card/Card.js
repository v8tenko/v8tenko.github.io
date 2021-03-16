import React, {forwardRef, useContext} from 'react'
import './Card.css'
import {ProjectContext} from "../../../../providers/CurrentProjectProvider";
import DataHelper from "../../../../utils/DataHelper";



const Card = forwardRef(({title, shortDescription, id, onClick}, ref) => {

  const {currentProject} = useContext(ProjectContext).project

  return (
    <div
      ref={ref}
      className={`card${DataHelper.projects.findIndex(element => element.id === id) === currentProject ? " colored" : ''}`}
      id={id}
      onClick={onClick}
    >
      <p className="title"> {title} </p>
      <p> {shortDescription} </p>
    </div>
  )
})

export default Card
