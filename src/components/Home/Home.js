import './Home.css'
import React, {useState} from 'react'
import home from '../../img/home.jpg'
import binaryCode from '../../img/binary_code.png'
import {isMobileOnly} from 'react-device-detect'
import MobileMenu from "../mobile_menu/MobileMenu";
import DownloadCV from "../download_pfd/DownloadCv";

export default function Home({menuItems}) {

  const [shown, setShown] = useState(false)

  function moveTo(element) {
    document.querySelector(`#${element}-before`).scrollIntoView({
      behavior: "smooth"
    })
  }

  if (isMobileOnly) {
    return (
      <section>
        <div id="v8tenko-before"/>
        <footer>
          <p> v8tenko </p>
          <p onClick={() => setShown(true)}> меню </p>
        </footer>
        <div className="content">
          <h1> привет, я </h1>
          <h1> Глеб Войтенко </h1>
          <p> и я разработчик программного обеспечения </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${home})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
          className="home-image"
        />
        <MobileMenu
          menuElements={menuItems}
          shown={shown}
          callback={() => setShown(false)} />
      </section>
    )
  }

  return (
    <section>
      <div className="home" id="v8tenko-before">
        <div className="name">
          <p> привет, я </p>
          <p className="name-p"> Глеб Войтенко </p>
          <p> и я разработчик программного обеспечения </p>
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
                <DownloadCV />
              </ul>
              <MobileMenu
                menuElements={menuItems}
                shown={shown}
                callback={() => setShown(false)} />
          </div>
        </div>
      </div>
    </section>
  )
}
