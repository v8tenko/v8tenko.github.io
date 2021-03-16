import './App.css';
import React, {useContext, useEffect} from "react";
import Home from './components/Home/Home'
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import {isMobileOnly} from 'react-device-detect';
import Education from "./components/experience/Education";
import ApiKeyProvider, {ApiKeyContext} from "./providers/ApiKeyProvider";
import DataHelper from "./utils/DataHelper";
import {toast, ToastContainer} from "react-toastify";

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
    <ApiKeyProvider>
      <div className=".App">
        <Home menuItems={menuElements}/>
        <Portfolio/>
        <Education/>
        <Contact/>
        <ToastContainer />
      </div>
    </ApiKeyProvider>
  )
}

export default App;
