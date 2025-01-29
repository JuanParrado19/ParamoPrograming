import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => (
  <section
    id="hero"
    className="d-flex align-items-center justify-content-center"
  >
    <video className="w-100" autoPlay muted loop style={{ zIndex: "-1" }}>
      <source src="src/assets/video/bgvideo.mp4" type="video/mp4" />
    </video>
    <div
      className="container position-absolute"
      style={{ padding: "5vh", zIndex: "-1" }}
    >
      <h1 className="text-center linearGradient mb-0 NameLogo">
        PÁRAMO PROGRAMING
      </h1>
      <p
        className="text-end mr-5 text-white html"
        style={{ paddingRight: "3vw" }}
      >
        ¡ Desarrollo de cima y a la medida !
      </p>
      <div className="d-flex justify-content-center">
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
