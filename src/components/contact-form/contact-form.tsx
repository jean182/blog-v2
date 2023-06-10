import React from "react";

export default function ContactForm() {
  const innerRef = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    innerRef.current && innerRef.current.focus();
  }, []);
  console.log(innerRef);
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/contact/thanks"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="field">
        <label className="label" htmlFor="name">
          Name
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            autoFocus
            ref={innerRef}
            name="name"
            id="name"
            required
            placeholder="John Doe"
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="email">
          Email
        </label>
        <div className="control">
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            required
            placeholder=""
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="message">
          Message
        </label>
        <div className="control">
          <textarea className="textarea" name="message" id="message" required />
        </div>
      </div>
    </form>
  );
}
