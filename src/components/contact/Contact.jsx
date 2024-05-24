import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5wka5ni",
      "template_sgwinp8",
      form.current,
      "_1AF-uAwV3FYyzX_L"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className="contanier contact_container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Write Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Write Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Write Your Message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
