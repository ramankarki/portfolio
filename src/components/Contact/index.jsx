import React, { Component } from "react";

import "./Contact.scss";
import exitIcon from "./exit.svg";
import contactIcon from "./contact_icon.svg";

export default class index extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    formState: "typing",
  };

  encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  onSubmit = async (event) => {
    event.preventDefault();

    for (let key of Object.keys(this.state)) {
      if (!this.state[key].trim()) return;
    }

    this.setState({ formState: "submitting" });

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "ramanContact", ...this.state }),
    })
      .then(() => {
        this.setState({
          name: "",
          email: "",
          subject: "",
          message: "",
          formState: "submitted",
        });
      })
      .catch((error) => this.setState({ formState: "failed" }));
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      formData: "typing",
    });
  };

  onModalExit = () => {
    this.setState({ formState: "exit modal" });
  };

  render() {
    return (
      <section className="contact" id="contact">
        <div className="contact__heading">
          <h2>Contact me</h2>
          <p>
            Let's have some conversation{" "}
            <img src={contactIcon} alt="contact icon" />
          </p>
        </div>

        <form
          className="contact__form form"
          name="ramanContact"
          method="POST"
          data-netlify={true}
          onSubmit={this.onSubmit}
        >
          <input type="hidden" name="form-name" value="ramanContact" />
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

        {this.state.formState === "submitted" ? (
          <p className="form-success">
            Form submitted successfully{" "}
            <img onClick={this.onModalExit} src={exitIcon} alt="exit icon" />
          </p>
        ) : this.state.formState === "failed" ? (
          <p className="form-failed">
            Form submittion failed{" "}
            <img onClick={this.onModalExit} src={exitIcon} alt="exit icon" />
          </p>
        ) : null}
      </section>
    );
  }
}
