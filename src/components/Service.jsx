import React from "react";

const Service = ({ imageSrc, title, description, imagePosition }) => {
  return (
    <div
      className={`flex flex-wrap items-center my-8 ${
        imagePosition === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="w-32 md:w-1/3 p-2">
        <img src={imageSrc} alt={title} className="w-full h-auto rounded-lg" />
      </div>

      <div className="w-full md:w-2/3 p-2">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 font-display">{description}</p>
      </div>
    </div>
  );
};

export default Service;
