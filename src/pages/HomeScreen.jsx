import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import LoaderText from "../components/loader/loadertext/LoaderText";
import HomeImage from "/home-screen-bg.webp";

const HomeScreen = () => {
  return (
    <>
      <m.div
        className="min-h-screen absolute z-10 top-0 left-0 w-full h-full"
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 3.5 }}
        exit={{ opacity: 0 }}
      >
        <LoaderText titleText="Softnet Tech" />
        <img
          className="object-cover brightness-[45%]"
          loading="lazy"
          src={HomeImage}
        />
      </m.div>
      <m.div
        className="bg-gray-950 absolute h-full  w-full z-3 top-0 left-0 bottom-0 right-0 text-white px-5 sm:px-16 lg:px-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 1 }}
        exit={{ y: "-100%", transition: { delay: 0.75, duration: 1.75 } }}
      >
        <m.div className="mt-32">
          <div className="casing">
            <m.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 2.75, duration: 0.75 }}
              className="text-6xl font-bold md:text-6xl lg:text-7xl"
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
          <div>
            <Link to={"features"} className="btn" data-content="Features">
              Features
            </Link>
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
          </div>
        </m.div>
        <m.div>
          <img alt="" />
        </m.div>
      </m.div>
    </>
  );
};

export default HomeScreen;
