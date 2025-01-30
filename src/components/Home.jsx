import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => (
  <section
    id="hero"
    className="flex items-center content-center justify-center"
  >
    <video className="w-[100] h-[100] z-0" autoPlay muted loop style={{ zIndex: "-1" }}>
      <source src="src/assets/video/bgvideo.mp4" type="video/mp4" />
    </video>
    <div
      className="absolute z-10 flex flex-col items-center justify-center"
      style={{ padding: "5vh"}}
    >
      <h1 className="text-center linearGradient mb-0 NameLogo">
        PÁRAMO PROGRAMING
      </h1>
      <p
        className="text-center text-white"
      >
        ¡ Desarrollo de cima y a la medida !
      </p>
      <div className="mt-[3rem] animate-bounce">
        <a href="#start">
          <FontAwesomeIcon
            icon="chevron-down"
            size="2xl"
            className=" "
            style={{ color: "#ffffff" }}
          />
        </a>
      </div>
    </div>
  </section>
);

export default Home;
