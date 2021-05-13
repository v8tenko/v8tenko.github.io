import './App.css';
import React from "react";
import Home from './components/home/Home'
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import {isMobileOnly} from 'react-device-detect';
import Education from "./components/experience/Education";
import DataHelper from "./utils/DataHelper";
import {toast, ToastContainer} from "react-toastify";
import FetchComponent from "./components/fetch-component/FetchComponent";
import {Utils} from "./utils/utils";

function App() {

  toast.configure()

  const menuElements = [
    'v8tenko',
    'портфолио',
    'образование',
    'связь'
  ]


  fetch('https://v8tenko-backend.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: "glebik8",
      password: "ilovedota2"
    })
  }).then(res => res.json())
    .then(res => res.accessToken)
    .then(res => {
      DataHelper.apiKey = res
    })


  if (isMobileOnly) {
    import('./mobile.css')
  }


  return (
      <FetchComponent promise={Utils.wait(500)} isMobile>
        <Home menuItems={menuElements}/>
        <Portfolio/>
        <Education/>
        <Contact/>
        <ToastContainer />
      </FetchComponent>
  )
}

export default App;
