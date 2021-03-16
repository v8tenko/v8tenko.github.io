import React, {useContext} from 'react'
import './Contact.css'

import Title from "../titles/TItle";
import DataHelper from "../../utils/DataHelper";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

  const time = 3000
  const isCorrectRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  function submitMail(event) {
    event.preventDefault()
    const [username, mail, message] =
      ['username', 'mail', 'message']
        .map(e => document.querySelector(`#${e}`))
        .map(e => e.value)
    if (mail.match(isCorrectRegEx)) {
      toast.info('Отправляем пиьсмо', {
        position: "top-right",
        autoClose: time,
        hideProgressBar: true,
        closeOnClick: true,
        progress: undefined,
      });
      fetch('https://v8tenko-backend.herokuapp.com/mail', {
        method: 'POST',
        headers: {
          'Authorization': `Beaer ${DataHelper.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: username,
          email: mail,
          message
        })
      })
        .catch(() => {
          toast.error('Ошибка отправления', {
            position: "top-right",
            autoClose: time,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
        })
        .then(() => {
        toast.success('Письмо успешно отправлено', {
          position: "top-right",
          autoClose: time,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      })
    } else {
      toast.error('Некорректная почта', {
        position: "top-right",
        autoClose: time,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  }


  return (
    <section className="contact" style={{
      minHeight: '60vh'
    }}>
      <div className="contact-before"/>
      <Title> связь </Title>
      <div className="content">
        <div className="write center">
          <form onSubmit={submitMail}>
            <label htmlFor="username"/>
            <input type="text" id="username" placeholder="имя"/>
            <label htmlFor="mail"/>
            <input type="text" id="mail" placeholder="почта"/>
            <label htmlFor="message"/>
            <textarea id="message" placeholder="собщение"/>
            <button id="send"> отправить </button>
          </form>
        </div>
        <div className="contacts center">
          <div>
            <div>
              <p className="contact-title"> моя почта </p>
              <h1> v8tenko@gmail.com</h1>
              <p className="contact-title"> мой telegram </p>
              <h1> @v8tenko</h1>
              <p className="contact-title"> мой vk </p>
              <a href="https://vk.com/glebvoitenko"> <h1> gleb.voitenko </h1> </a>
            </div>
            <div>
              <p className="contact-title"> дизайн </p>
              <a href="https://ikovylyaev.com"><h1> ikovylyaev.com </h1> </a>
              <p className="contact-title"> разработка </p>
              <a href="https://github.com/v8tenko"><h1> github.com/v8tenko </h1> </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
