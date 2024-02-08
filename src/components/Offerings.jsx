import HeroImage from "/hero-img.svg";
import information from "../assets/data/information.json";
import outline from "../assets/data/outlines.json";
import Correct from "/correct.svg";

const Offerings = () => {
  return (
    <div className="c-container mb-20">
      <div>
        <img
          src={HeroImage}
          alt="an hero image showing a computer with a set of books and certificates"
          className="min-w-[350px] "
        />
      </div>
      <div>
        <h2>
          We Provide Many <span>Features</span> You Can Use
        </h2>
        <p>
          You can explore the features that we provide with fun and have thier
          own functions for each feature
        </p>
        <p>
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
      <div>
        <h2 className="text-center font-bold">Services we provide</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {information.map((info) => (
            <div
              key={info.id}
              className="flex flex-col items-center gap-2 p-6 card-container outline outline-1 outline-blue-100 hover:outline-none duration-300"
            >
              <div className="bg-bg-icon max-w-max p-3 rounded-full">
                <img src={info.img} className="w-6" alt="card image" />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <h3 className="text-t-blue">{info.topic}</h3>
                <p className="text-t-gray text-center">{info.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offerings;
