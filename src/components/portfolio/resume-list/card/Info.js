import React from 'react'
import './Info.css'
import Printing from "../../../printing-animation/Printing";


export default function Info({source, title, longDescription}) {

  return (
    <div className="info">
      <div className="projects-image" style={{
        backgroundImage: `url(${source})`,
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}/>

      <Printing delay={30} showCursor={true} className='title'>
        {title}
      </Printing>
      <p> {longDescription} </p>
    </div>
  )
}
