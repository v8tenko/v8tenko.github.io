import React from 'react'
import './Contact.css'
import Title from "../titles/TItle";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-before"/>
      <Title> contact </Title>
      <div className="content">
        <div className="write center">
          <form action="">
            <label htmlFor="username"/>
            <input type="text" id="username" placeholder="name" />
            <label htmlFor="mail"/>
            <input type="text" id="mail" placeholder="email" />
            <label htmlFor="message"/>
            <textarea id="message" placeholder="message" />
            <button id="send"> send </button>
          </form>
        </div>
        <div className="contacts center">
          <div>
            <div>
              <p className="contact-title"> my email </p>
              <h1> v8tenko@gmail.com</h1>
              <p className="contact-title"> my telegram </p>
              <h1> @v8tenko</h1>
            </div>
            <div>
              <p className="contact-title"> design </p>
              <a href="https://ikovylyaev.com"><h1> ikovylyaev.com </h1></a>
              <p className="contact-title"> develop </p>
              <a href="https://github.com/v8tenko"><h1> github.com/v8tenko </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
