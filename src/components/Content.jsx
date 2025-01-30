import React, { useState } from "react";
import "../uiKit.css";
import AccordionButton from "./AccordionButton";
import AutoScroll from "../components/AutoScroll.jsx";
import ContactUs from "../components/ContactUs.jsx";

const Content = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  const images = [
    "./src/assets/Landing.png",
    "./src/assets/E-Commerce.png",
    "./src/assets/Portfolio.png",
  ];
  return (
    <section
      id="start"
      className="py-5 align-items-center justify-content-center flex-row-reversed overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #090D23 0%, #1D255C 17.63%, #2B3788 43.99%, #3948B3 69.5%, #4658DA 100%)",
      }}
    >
      <div className="d-flex py-4">
        <div>
          <div>
            <h5 className="text-white">
              Creemos una imagen digital <u>unica</u> a tu negocio que te ayude
              a crecer!
            </h5>
          </div>

          <div>
            <AccordionButton
              label="Landing page"
              isOpen={openIndex === 0}
              onClick={() => handleToggle(0)}
            >
              <span className="bodytext text-white">
                Es una herramienta esencial en el marketing digital diseñada
                específicamente para convertir visitantes en clientes
                potenciales.La idea principal es que des a conocer tus
                productos/servicios.
              </span>
            </AccordionButton>
            <br />
            <AccordionButton
              label="E-Commerce"
              isOpen={openIndex === 1}
              onClick={() => handleToggle(1)}
            >
              <span className="bodytext text-white">
                Es una plataforma en línea diseñada para permitir a las empresas
                vender productos y servicios a través de un portal unico
                diseñado específicamente para su negocio. Su objetivo principal
                es facilitar las transacciones y brindar una experiencia de
                compra cómoda y segura para los clientes.
              </span>
            </AccordionButton>
            <br />
            <AccordionButton
              label="Portafolios"
              isOpen={openIndex === 2}
              onClick={() => handleToggle(2)}
            >
              <span className="bodytext text-white">
                Es una herramienta digital que permite a profesionales y
                empresas mostrar sus trabajos, habilidades y proyectos
                realizados. Su objetivo principal es destacar su experiencia y
                atraer potenciales clientes o empleadores.
              </span>
            </AccordionButton>
          </div>
        </div>
        <div>
          <div style={{ position: "relative" }}>
            <img
              src="./src/assets/Browser.png"
              className="img-fluid" //Poner position-absolute si queremos intentar sacar la imagen del contenedor
              alt="Browser"
              style={{ position: "absolute", display: "block", width: "100%" }}
            />
            <div
              style={{
                position: "absolute",
                width: "92.8%",
                height: "24.3vw",
                top: "4vw",
                left: "3.6%",
                overflow: "hidden",
                borderBottomLeftRadius: "0.2vw",
                borderBottomRightRadius: "0.2vw",
              }}
            >
              <img
                src={images[openIndex]}
                className="img-fluid"
                alt="Content"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <AutoScroll />
      <ContactUs />
    </section>
  );
};

export default Content;
