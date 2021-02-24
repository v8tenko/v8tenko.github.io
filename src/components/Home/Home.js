import './Home.css'
import React from 'react'
import home from '../../img/home.jpg'
import binaryCode from '../../img/binary_code.png'

export default function Home({menuItems}) {

  function moveTo(element) {
    document.querySelector(`#${element}-before`).scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <section>
    <div className="home" id="v8tenko-before">
      <div className="name">
        <p> hi, I'm </p>
        <p className="name-p"> Gleb Voitenko </p>
        <p> and I'm a software engineer </p>
      </div>
      <div className="menu">
        <div className="pics">
          <img className="picture" src={home} alt=""/>
          <img className="picture-code" src={binaryCode} alt=""/>
        </div>
        <div id="menu">
          <ul>
            {
              menuItems.map(content => {
                return <li
                  key={content}
                  className="menu-element"
                  onClick={() => moveTo(content)}
                >  {content}  </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
    </section>
  )
}
