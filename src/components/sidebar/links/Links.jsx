import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setOpen }) => {
  const items = [
    {
      id: "1",
      name: "Home",
      link: "/",
    },
    {
      id: "2",
      name: "About",
      link: "/about",
    },
    {
      id: "3",
      name: "Contact",
      link: "/contact",
    },
    {
      id: "4",
      name: "Features",
      link: "/features",
    },
    {
      id: "5",
      name: "Services",
      link: "/services",
    }
  ];

  return (
    <motion.div
      className="absolute w-full h-full flex flex-col items-center justify-center gap-5"
      variants={variants}
    >
      {items.map((item) => (
        <motion.span
          key={item.id}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(false)}
          className="text-4xl cursor-pointer"
        >
          <Link to={`${item.link}`}>{item.name}</Link>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Links;
