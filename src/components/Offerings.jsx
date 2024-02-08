import HeroImage from "/hero-img.svg";

const Offerings = () => {
  return (
    <div className="c-container">
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
          {/* Bullet points go here mapped */}
        </p>
        <h2 className="text-center font-bold">Services we provide</h2>
        <div>
          {/* Mapped Service cards go here */}
        </div>
      </div>
    </div>
  );
};

export default Offerings;
