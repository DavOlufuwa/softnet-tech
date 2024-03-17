import { motion as m } from "framer-motion";
import Preloader from "../components/preloader/Preloader";
import AboutImage from "/about-us.webp";

const About = () => {
  return (
    <>
      <Preloader loaderText="About Softnet" />
      <m.div
        className="bg-gray-900 text-white absolute h-full w-full z-3 top-0 left-0 bottom-0 right-0 px-5 flex flex-col gap-12 items-center justify-center md:px-0 md:flex-row md:items-start md:gap-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, transition: { delay: 0.75 } }}
      >
        <div className="md:px-4 mt-12 lg:px-12">
          <div className="casing sm:mt-16">
            <m.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 4.75, duration: 0.75 }}
              className="text-6xl font-bold md:text-6xl lg:leading-tight sm:mt-20"
            >
              About Us
            </m.h2>
          </div>
          <div className="casing mt-4">
            <m.p
              className="leading-7 font-normal md:text-[15px] md:tracking-wider"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 4.75, duration: 0.75 }}
            >
              Softnet School management software is a comprehensive solution
              designed to streamline and automate various administrative and
              academic tasks within educational institutions. Softnet e-school
              mgt solution enhance efficiency, communication, and overall
              management of schools task and process.
            </m.p>
          </div>
        </div>
        <m.div
          className="md:min-w-[50%] md:h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.75, duration: 0.75 }}
        >
          <img
            src={AboutImage}
            alt="images of people using a computer"
            className="object-cover brightness-75"
          />
        </m.div>
      </m.div>
    </>
  );
};

export default About;
