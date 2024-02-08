import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="bg-t-blue">
        <div>
          Send Us a Message or Give us a call at{" "}
          <span>
            <a>08104732823</a>
          </span>
        </div>
        <form>
          <div className="form-container">
            <label htmlFor="senderName">Name</label>
            <input
              type="text"
              id="senderName"
              name="senderName"
              placeholder="please enter your name"
            />
          </div>
          <div className="form-container">
            <label htmlFor="senderName">Email</label>
            <input
              type="text"
              id="senderEmail"
              name="senderEmail"
              placeholder="please enter your email address"
            />
          </div>
          <div className="form-container">
            <label htmlFor="senderName">Message</label>
            <textarea
              placeholder="Message"
              name="message"
              className="message-box"
              required
            ></textarea>
          </div>
        </form>
      </div>
      <div className="text-center mb-4">&copy; 2023 SoftNet Technologies</div>
    </footer>
  );
}

export default Footer