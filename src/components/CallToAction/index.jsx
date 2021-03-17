import React, { Component } from "react";

import "./CallToAction.scss";

export default class index extends Component {
  render() {
    return (
      <section className="cta">
        <div>
          <h3>Ready to work with me ?</h3>
          <p>
            Hire me as a part time web developer or let’s build some great
            projects together.
          </p>
        </div>
        <a href="#contact">Let's do it</a>
      </section>
    );
  }
}
