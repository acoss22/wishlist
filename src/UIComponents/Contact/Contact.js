import React, { Component } from "react";
import "./Contact.scss";
class Contact extends Component {
  render() {
    return (
      <div>
        <section className="push" id="contact">
          <div className="firstSection card">
            <h2>Feel free to ask me anything!</h2>

            <a
              href="mailto:anacseq@gmail.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="contact-btn button1"
            >
              <div className="button">
                <span className="button__mask"></span>
                <span className="button__text">Say Hello!</span>
                <span className="button__text button__text--bis">Say Hello!</span>
              </div>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
