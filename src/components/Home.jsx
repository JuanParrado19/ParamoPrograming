import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const handleScroll = () => {
    const element = document.getElementById("start");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="flex items-center justify-center h-screen relative"
    >
      <video
        className="w-full h-full object-cover absolute z-0"
        autoPlay
        muted
        loop
      >
        <source src="src/assets/video/bgvideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-center linearGradient mb-0 NameLogo">
          PÁRAMO PROGRAMING
        </h1>
        <p className="text-center text-white mt-2">
          ¡ Desarrollo de cima y a la medida !
        </p>

        <div className="mt-12 animate-bounce">
          <button
            onClick={handleScroll}
            className="focus:outline-none cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              size="2xl"
              className="text-white"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
