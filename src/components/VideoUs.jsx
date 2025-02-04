import React from "react";

const VideoUs = () => (
  <section
    id="start"
    className="relative flex items-center overflow-hidden h-screen"
  >
    {/* Video de fondo */}
    <video
      className="absolute w-full h-full object-cover"
      autoPlay
      muted
      loop
      id="myVideo"
      style={{ zIndex: 0 }} // Asegúrate de que el video esté detrás de todo
    >
      <source src="src/assets/video/bgUs.mp4" type="video/mp4" />
      Tu navegador no soporta videos HTML5.
    </video>

    {/* Contenido de texto */}
    <div className="relative z-10 flex justify-start p-8">
      <div className="max-w-[50%]">
        <h2 className="m-4 text-paramo-100 text-xl font-bold drop-shadow-xl">
          Llevando tu Empresa al Páramo de la Innovación
        </h2>
        <div className="p-4 rounded-[1.5vw] bg-gradient-to-r from-paramo-100 to-blue-700 drop-shadow-xl transition duration-500 ease-in-out">
          <p className="text-white text-xs text-justify font-display">
            Somos una agencia digital especializada en desarrollo web y backend.
            Impulsados por la curiosidad y la innovación, maximizamos el alcance
            de tu emprendimiento o negocio con soluciones digitales que florecen
            en la serenidad del páramo.
          </p>
        </div>
      </div>
    </div>

    {/* Imagen de la derecha */}
    <img
      src="./src/assets/imgUS.png"
      className="absolute inset-y-0 right-0 h-full object-contain z-20" // Asegúrate de que la imagen esté por encima del video
      alt="Imagen de Paramo"
    />
  </section>
);

export default VideoUs;
