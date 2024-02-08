import HeroImage from "/hero-img.svg";
import information from "../assets/data/information.json";
import outline from "../assets/data/outlines.json";
import Correct from "/correct.svg";

const Offerings = () => {
  return (
    <div className="c-container mb-40" id="about">
      <div className="flex flex-col-reverse py-12 mb-12 md:flex-row md:gap-10 items-center ">
        <img
          src={HeroImage}
          alt="an hero image showing a computer with a set of books and certificates"
          className="min-w-[350px] "
          data-aos="fade-right"
          data-aos-duration="800"
        />
        <div data-aos="fade-left" data-aos-duration="800">
          <h2 className="text-4xl font-bold mb-4 md:mb-6 md:text-[2.35rem]  xl:text-5xl xl:leading-[60px]">
            We Provide Many <span className="text-btn">Features</span> You Can
            Use
          </h2>
          <p className=" text-[15px] text-gray-700 mb-5">
            You can explore the features that we provide with fun and have their
            own functions for each feature
          </p>
          <p className="flex flex-col text-[15px] gap-5 text-gray-700 ">
            {outline.map((outline) => (
              <article key={outline.id} className="flex gap-3 items-center">
                <div className="bg-t-blue rounded-full p-1">
                  <img src={Correct} alt="correct icon" className="w-3" />
                </div>
                <p>{outline.point}</p>
              </article>
            ))}
          </p>
        </div>
      </div>
      <div id="services">
        <h2
          className="capitalize text-4xl text-center font-bold my-10"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          Services we provide
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {information.map((info) => (
            <div
              key={info.id}
              className="flex flex-col items-center gap-2 p-6 card-container outline outline-1 outline-blue-100 hover:outline-none duration-300"
              data-aos="zoom-in-down"
              data-aos-duration="800"
            >
              <div className="bg-bg-icon max-w-max p-3 rounded-full">
                <img src={info.img} className="w-6" alt="card image" />
              </div>
              <div className="flex flex-col gap-3 items-center">
                <h3 className="text-t-blue">{info.topic}</h3>
                <p className="text-t-gray text-center text-sm">
                  {info.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offerings;
