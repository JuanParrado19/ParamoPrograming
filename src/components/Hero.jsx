import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedText from "../utils/AnimatedText";

const Hero = () => {
  const handleScroll = () => {
    const element = document.getElementById("content");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedText />
        <div className="flex flex-col items-center justify-center">
          <p className="mt-8 text-center text-gray-600 max-w-md mx-auto">
            Deja tus ideas volar, nosotros nos encargamos del resto.
          </p>
          <button
            onClick={handleScroll}
            className="focus:outline-none cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              size="2xl"
              className="text-black"
            />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
