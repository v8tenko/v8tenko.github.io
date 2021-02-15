import React from 'react'
import './Info.css'
import Printing from "../../../printing-animation/Printing";


export default function Info({source, title, longDescription}) {

  return (
    <div className="info">
      <div className="projects-image" style={{
        background: `url(${source}) no-repeat center center`
      }}/>

      <Printing time={500} showCursor={true} className='title'>
        {title}
      </Printing>
      <p> {longDescription} </p>
    </div>
  )
}
