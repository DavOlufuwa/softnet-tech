import { motion as m } from "framer-motion";
import Preloader from "../components/preloader/Preloader";
import ContactImage from "/contactus.webp";
import Magnetic from "../components/magnetic/Magnetic";

const Contact = () => {
  return (
    <>
      <Preloader loaderText="Speak with us" />
      <m.div
        className="bg-gray-900 text-white absolute h-full w-full z-3 top-0 left-0 bottom-0 right-0 px-5 flex flex-col gap-12 items-center justify-center md:px-0 md:flex-row md:items-start md:gap-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, transition: { delay: 0.75 } }}
      >
        <div className="md:px-4 mt-12  xl:px-24 sm:min-w-[55%] lg:min-w-[50%]">
          <div className="casing sm:mt-16">
            <m.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 4.75, duration: 0.75 }}
              className="text-6xl font-bold md:text-6xl lg:leading-tight sm:mt-20"
            >
              Contact Us
            </m.h2>
          </div>
          <div className="casing mt-4">
            <m.form
              className="flex flex-col gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.75, duration: 0.75 }}
            >
              <div className="form-container">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" autoComplete="off" />
              </div>
              <div className="form-container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                />
              </div>
              <div className="form-container">
                <label htmlFor="message">Message</label>
                <textarea type="text" id="name"></textarea>
              </div>
              <div className="mt-2">
                <Magnetic>
                  <button
                    className="btn border-none outline-none"
                    data-content="Send"
                  >
                    Send
                  </button>
                </Magnetic>
              </div>
            </m.form>
          </div>
        </div>
        <m.div
          className="hidden md:block md:h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.75, duration: 0.75 }}
        >
          <img
            src={ContactImage}
            alt="image of a computer"
            className="object-cover brightness-75"
          />
        </m.div>
      </m.div>
    </>
  );
};

export default Contact;
