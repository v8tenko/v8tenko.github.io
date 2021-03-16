import React from 'react'
import './MobileMenu.css'

export default function MobileMenu({callback, shown, menuElements}) {


  function moveTo(element) {
    document.querySelector(`#${element}-before`).scrollIntoView()
  }

  return (
    <div className="full"
         onClick={callback}
         style={{
           display: shown ? 'block' : 'none'
         }}>
      <div className="close"> &#10006; </div>
      <div className="center-content">
        <ul>
          {menuElements.map((element, index) => {
            return <li key={index} onClick={() => moveTo(element)}> {element} </li>
          })}
        </ul>
      </div>
    </div>
  )
}
