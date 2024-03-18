import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from "/hero-image.webp";
import Magnetic from "../components/magnetic/Magnetic";
import Preloader from "../components/preloader/Preloader";
const HomeScreen = () => {
  return (
    <>
      <Preloader loaderText={"Softnet Tech"} />
      <m.div
        className="lg:flex lg:gap-16 lg:items-center bg-gray-900 absolute overflow-y-hidden h-full w-full z-3 top-0 left-0 bottom-0 right-0 text-white px-5 sm:px-16 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, transition: { delay: 0.75 } }}
      >
        <m.div className="mt-24 sm:mt-32 lg:mt-0">
          <div className="casing">
            <m.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 2.75, duration: 0.75 }}
              className="text-6xl font-bold md:text-6xl lg:leading-tight"
            >
              Grow Your Business With Innovative Ideas
            </m.h2>
          </div>

          <div className="casing mt-4">
            <m.h4
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 2.75, duration: 0.75 }}
              className="font-normal tracking-wide leading-8"
            >
              Softnet School management software is a comprehensive solution
              designed to streamline and automate various administrative and
              academic tasks within educational institutions. We enhance
              efficiency, communication, and overall management of schools task
              and process.
            </m.h4>
          </div>
          <m.div
            className="mt-6 flex items-center px-1 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.75, duration: 1 }}
          >
            <Magnetic>
              <Link to={"features"} className="btn" data-content="Features">
                Features
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="about" className="btn-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3em"
                  height="3em"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="#22C55E"
                    d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"
                  />
                  <path
                    fill="#22C55E"
                    d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                  />
                  <path fill="#22C55E" d="M16 24h17v2H16z" />
                </svg>
                See more
              </Link>
            </Magnetic>
          </m.div>
        </m.div>
        <m.div className="hidden lg:block lg:min-w-[50%]">
          <m.img
            alt="image showing innovation through hands"
            src={HeroImage}
            className="rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.75, duration: 1 }}
          />
        </m.div>
      </m.div>
    </>
  );
};

export default HomeScreen;
