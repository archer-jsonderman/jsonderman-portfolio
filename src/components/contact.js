import React from "react";

const Contact = (props) => {
    return (
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Contact</h2>
          </div>
          <form
            name="contact"
            method="POST"
            action="https://formspree.io/f/xrgjgbnw"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
<input type="hidden" name="bot-field" />
<input type="hidden" name="form-name" value="contact" />
            <div>
              <label>
                Your Name: <input type="text" name="name" required />
              </label>
            </div>
            <div>
              <label>
                Your Email: <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label>
                Message: <textarea name="message" required></textarea>
              </label>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Contact;
