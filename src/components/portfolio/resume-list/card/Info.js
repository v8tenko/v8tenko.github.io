import React from 'react'
import './Info.css'
import Printing from "../../../printing-animation/Printing";


export default function Info({source, title, longDescription, stack}) {

  return (
    <div className="info">
      <div className="projects-image" style={{
        backgroundImage: `url(${source})`,
        backgroundPosition: 'right center',
        backgroundRepeat: 'repeat-x',
        backgroundSize: '10% 100%'
      }}/>

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
