import React from 'react'
import './Info.css'
import Typist from 'react-typist';
import Printing from "../../../printing-animation/Printing";


export default function Info({source, title, longDescription}) {

  console.log(title)

  return (
    <div className="info">
      <div className="projects-image" style={{
        background: `url(${source}) no-repeat no-repeat`
      }}/>

      <Printing time={150} showCursor={true} className='title'>
        {title}
      </Printing>
      <p> {longDescription} </p>
    </div>
  )
}
