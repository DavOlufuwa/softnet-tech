import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <m.div
        className="min-h-screen text-gray-900 absolute z-10 top-0 left-0 w-full h-full"
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <img
          className="object-cover"
          loading="lazy"
          src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </m.div>
      <m.div
        className="bg-red-400 absolute h-full  w-full z-3 top-0 left-0 bottom-0 right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 1 }}
        exit={{ y: "-100%", transition: { duration: 1.75 } }}
      >
        <m.div>
          <div className="p-1 overflow-hidden">
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 2, duration: 0.5}}
              className="text-5xl"
            >
              Grow Your Business With Innovative Ideas
            </m.h1>
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
