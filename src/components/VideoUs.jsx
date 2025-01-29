import React from "react";

const VideoUs = () => (
  <section
    id="start"
    className="relative flex items-center overflow-hidden"
  >
    <video
      className="w-full"
      autoPlay
      muted
      loop
      id="myVideo"
      style={{ zIndex: "-1" }}
    >
      <source src="src/assets/video/bgUs.mp4" type="video/mp4" />
    </video>
    <div
      className="absolute flex justify-start pt-2"
      style={{ zIndex: "0" }}
    >
      <div className="flex justify-start">
        <div className=" p-4 font-size-1/5vw ">
          <h2 className="m-4 text-paramo-100 text-xl font-we drop-shadow-xl font-black">Llevando tu Empresa al Páramo de la Innovación</h2>
          <div
            className="p-4 rounded-[1.5vw] bg-gradient-to-r from-paramo-100 to-blue-700 max-w-[60%] drop-shadow-xl transition duration-500 ease-in-out"
          >
            <p className="text-white text-xs  text-justify font-display">
              Somos una agencia digital especializada en desarrollo web y
              backend. Impulsados por la curiosidad y la innovación,
              maximizamos el alcance de tu emprendimiento o negocio con
              soluciones digitales que florecen en la serenidad del páramo.
            </p>
          </div>
        </div>
        <div className="w-50"></div>
      </div>
    </div>
    <img
      src="./src/assets/imgUS.png"
      className="absolute inset-y-0 right-0 bottom-0 h-[100%] object-contain"
      alt=""
    />
  </section>
);

export default VideoUs;
