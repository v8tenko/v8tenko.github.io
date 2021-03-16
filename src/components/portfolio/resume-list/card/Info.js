import React from 'react'
import './Info.css'
import Printing from "../../../printing-animation/Printing";
import { isMobileOnly } from 'react-device-detect'

export default function Info({source, title, longDescription, stack}) {

  return (
    <div className="info">
      {!isMobileOnly && <div className="projects-image" style={{
        backgroundImage: `url(${source})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'cover',
      }}/>}

      <Printing delay={30} showCursor={true} className='title'>
        {title}
      </Printing>
      <div className="content">
        <div className="description">
          <p> {longDescription} </p>
        </div>
        <div className="stack">
          {
            stack && stack.map(content => {
              return <p key={content}> {content} </p>
            })
          }
        </div>
      </div>
    </div>
  )
}
