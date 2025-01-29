import React from "react";

const Service = ({ description, image, alignment, title }) => {
  const alignmentClass =
    alignment === "right" ? "flex-row" : "flex-row-reverse";

  return (
    <section
      id="start"
      className={`d-flex pb-5 align-items-center justify-content-center bg-white ${alignmentClass}`}
    >
      <div>
        <h1 className="text-dark py-5">{title}</h1>
        <p className="bodytext">{description}</p>
      </div>
      <div>
        <img src={image} className="img-fluid" />
      </div>
    </section>
  );
};

export default Service;
