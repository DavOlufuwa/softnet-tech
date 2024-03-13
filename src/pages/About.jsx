import { motion as m } from "framer-motion";
import LoaderText from "../components/loader/loadertext/LoaderText";
import AboutImage from "/about-us.webp";

const About = () => {
  return (
    <>
      <m.div
        className="min-h-screen text-gray-900 absolute z-10 top-0 left-0 w-full h-full"
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 3 , ease:"easeOut"}}
        exit={{ opacity: 0 }}
      >
        <LoaderText titleText="About Softnet" />
        <img
          className="w-full h-full object-cover brightness-[45%]"
          loading="lazy"
          src={AboutImage}
        />
      </m.div>
      <m.div
        className="bg-green-300 absolute h-full w-full z-3 top-0 left-0 bottom-0 right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 1 }}
        exit={{ y: "-100%", transition: { delay: 0.75, duration: 1.75 } }}
      >
        <h2>About screen</h2>
        <p>
          Softnet School management software is a comprehensive solution
          designed to streamline and automate various administrative and
          academic tasks within educational institutions. Softnet e-school mgt
          solution enhance efficiency, communication, and overall management of
          schools task and process.
        </p>
      </m.div>
    </>
  );
};

export default About;
