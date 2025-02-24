import { useState } from "react";
import Links from "./links/Links";
// import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.45,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-red-300 text-black"
      animate={open ? "open" : "closed"}
    >
      <motion.div className="z-[90] fixed top-0 left-0 bottom-0 w-full bg-slate-100 sm:w-96" variants={variants}>
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
