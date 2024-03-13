import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import LoaderText from "../components/loader/loadertext/LoaderText";

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
          src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </m.div>
      <m.div
        className="bg-gray-900 absolute h-full  w-full z-3 top-0 left-0 bottom-0 right-0 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 1 }}
        exit={{ y: "-100%", transition: { delay: 0.75, duration: 1.75 } }}
      >
        <m.div>
          <div className="p-1 overflow-hidden">
            <m.h2
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 2.25, duration: 0.5 }}
              className="text-5xl"
            >
              Grow Your Business With Innovative Ideas
            </m.h2>
          </div>

          <h4>
            Let creators and innovators help you create tools that will ensure
            your business thrives.
          </h4>
          <div>
            <Link to={"features"}>Features</Link>
            <Link to="about">See more</Link>
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
