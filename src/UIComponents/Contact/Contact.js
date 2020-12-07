import React, { Component } from "react";
import "./Contact.scss";
class Contact extends Component {
  render() {
    return (
      <div>
        <section class="push" id="contact">
          <div class="firstSection card">
            <h2>Feel free to ask me anything!</h2>

            <a
              href="mailto:anacseq@gmail.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              class="contact-btn button1"
            >
              <div class="button">
                <span class="button__mask"></span>
                <span class="button__text">Say Hello!</span>
                <span class="button__text button__text--bis">Say Hello!</span>
              </div>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
