import React, { useEffect } from 'react'
import Navigation from '../components/Navigation.jsx'
import Hero from '../components/Hero.jsx'
import Offerings from '../components/Offerings.jsx'
import Footer from '../components/Footer.jsx'
import ProgressBar from '../components/ProgressBar.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
const HomeScreen = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ProgressBar/>
      <Navigation />
      <Hero />
      <Offerings/>
      <Footer />
    </>
  )
}

export default HomeScreen