import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { enqueueSnackbar } from "notistack";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Send Message");
  const form = useRef();

  const action = (snackBarId) => (
    <button onClick={() => closeSnackbar(snackBarId)} className="click-button">
      &#10005;
    </button>
  );

  const sendEmail = (e) => {
    e.preventDefault();

    setButtonLabel("Sending...");

    emailjs
      .sendForm(
        "service_0k7q9p8", // replace with service id
        "contact_form",
        e.target,
        form.current,
        "user_0yYqXf9x5p8s5eX7xUZ6p" // replace with user id
      )
      .then(
        () => {
          enqueueSnackbar(
            `${senderName}, Thank you for reaching out. We would respond to your message shortly`,
            {
              variant: "info",
              action,
            }
          );
          setSenderName("");
          setButtonLabel("Send Message");
          form.current.reset();
        },
        (error) => {
          enqueueSnackbar(
            "Sorry, there was a little issue. Please try again",
            {
              variant: "info",
              action,
            }
          );
          setButtonLabel("Send a Message");
          console.log(error.text)
        }
      );
  };

  return (
    <footer id="footer" className="bg-bg-footer pb-2">
      <div className="">
        <div className="h-24 -translate-y-12 grid place-content-center rounded-sm bg-bg-blues text-xl text-center font-medium text-gray-600 md:text-2xl mx-5 shadow-lg shadow-bg-icons max-w-[650px] md:mx-auto">
          <p>
            Send Us a Message or
            <span className="text-t-blue font-semibold">
              <a className="cursor-pointer"> Give us a call at 08104732823</a>
            </span>
          </p>
        </div>
        <form
          className="py-6 px-8 flex flex-col gap-4 max-w-[700px] md:mx-auto"
          ref={form}
          onSubmit={sendEmail}
          id="contact_form"
        >
          <div className="form-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="please enter your name"
            />
          </div>
          <div className="form-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="please enter your email address"
            />
          </div>
          <div className="form-container">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="write your message here"
              name="message"
              id="message"
              required
            ></textarea>
          </div>
          <div>
            <button className="button-filled my-5" type="submit" disabled={loading}>
              {buttonLabel}
            </button>
          </div>
        </form>
      </div>
      <div className="text-center text-sm text-slate-400">
        &copy; 2023 SoftNet Technologies
      </div>
    </footer>
  );
};

export default Footer;
