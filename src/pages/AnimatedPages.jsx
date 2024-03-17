import { Routes, Route, useLocation } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import Contact from "./Contact";
import About from "./About";
import Features from "./Features";
import Offerings from "./Offerings";
import { AnimatePresence } from "framer-motion";


const AnimatedPages = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="features" element={<Features />} />
        <Route path="services" element={<Offerings />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedPages;
