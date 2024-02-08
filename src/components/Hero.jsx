import React, { useEffect } from "react";
import HeroImage from "/hero-img.svg";


const Hero = () => {


  return (
    <div className="c-container bg-bg-blues flex flex-col items-center">
      <div className="flex flex-col gap-15 md:flex-row md:mt-1 md:items-center md:gap-16">
        <div className="pt-5 text-center md:text-left" data-aos="fade-up" data-aos-duration="700">
          <h1 className="text-5xl font-bold leading-[60px] mb-4 md:mb-6 md:text-[2.5rem] lg:text-6xl lg:leading-[70px] xl:text-7xl xl:leading-[80px]">
            Want anything to be easy with{" "}
            <span className="text-t-blue font-black">SoftNet</span> Technologies
          </h1>
          <small className="text-sm text-gray-500">
            Provide a network for all your needs with ease and fun using{" "}
            <span className="font-bold text-t-gray">Softnet Technologies</span>.
            Discover interesting features from us.
          </small>
        </div>
        <div data-aos="fade-up" data-aos-duration="700">
          <img
            src={HeroImage}
            alt="an hero image showing a computer with a set of books and certificates"
            className="min-w-[380px] md:min-w-[400px] lg:min-w-[450px] xl:min-w-[600px] "
          />
        </div>
      </div>
      <div>
        <small className="uppercase text-gray-400 font-extralight tracking-wider">
          scroll down
        </small>
      </div>
    </div>
  );
};

export default Hero;
