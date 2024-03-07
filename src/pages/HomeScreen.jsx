import { motion as m } from "framer-motion";

const HomeScreen = () => {
  return (
    <>
      <m.div
        className="min-h-screen text-gray-900 absolute z-10 top-0 left-0 w-full h-full  px:16 lg:px-48"
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <img
          className="object-cover"
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
        <h1>Home screen</h1>
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

export default HomeScreen;
