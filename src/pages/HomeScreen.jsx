import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import transition from "../transition.jsx";
import { motion as m } from "framer-motion";

const HomeScreen = () => {
  return (
    <m.div
      className="min-h-screen text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-200 px:16 lg:px-48" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      
    >
      <h1>Home screen</h1>
      <p>
        Softnet School management software is a comprehensive solution designed
        to streamline and automate various administrative and academic tasks
        within educational institutions. Softnet e-school mgt solution enhance
        efficiency, communication, and overall management of schools task and
        process.
      </p>
    </m.div>
  );
};

export default HomeScreen;
