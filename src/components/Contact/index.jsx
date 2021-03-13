import React, { Component } from "react";

import "./Contact.scss";

export default class index extends Component {
  state = { name: "", email: "", subject: "", message: "", formState: "" };

  onSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();

    for (let key of Object.keys(this.state)) {
      if (!this.state[key].trim()) return;
      formData.append(key, this.state[key]);
    }

    this.setState({ formState: "submitting" });

    console.log(this.state);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
    })
      .then(() => {
        this.setState({ formState: "submitted" });
      })
      .catch((error) => this.setState({ formState: "failed" }));

    this.setState({ name: "", email: "", subject: "", message: "" });
  };

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <section className="contact">
        <div className="contact__heading">
          <h2>Contact me</h2>
          <p>Let's have some conversation</p>
        </div>

        <form
          className="contact__form form"
          netlify
          name="contact"
          onSubmit={this.onSubmit}
        >
          <label className="form__name">
            <p>Name</p>
            <input
              type="text"
              name="name"
              onChange={this.onInputChange}
              value={this.state.name}
              required
            />
          </label>
          <label className="form__email">
            <p>Email</p>
            <input
              type="email"
              name="email"
              onChange={this.onInputChange}
              value={this.state.email}
              required
            />
          </label>
          <label className="form__subject">
            <p>Subject</p>
            <input
              type="text"
              name="subject"
              onChange={this.onInputChange}
              value={this.state.subject}
              required
            />
          </label>
          <label className="form__message">
            <p>Message</p>
            <textarea
              name="message"
              onChange={this.onInputChange}
              value={this.state.message}
              id=""
              cols="30"
              rows="4"
              required
            ></textarea>
          </label>
          <button type="submit">
            {this.state.formState === "submitting" ? (
              <div className="spinner-border text-primary" role="status"></div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </section>
    );
  }
}
