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
      className="flex flex-row items-center h-[100vh]"
    >
      <div className="flex flex-row">
        <div className="flex flex-col p-4">
          <h5 className="text-white p-4">
            Creemos una imagen digital <u>unica</u> a tu negocio que te ayude
            a crecer!
          </h5>
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
        <div className="flex justify-center flex-col">
          <div className="relative">
            <img
              src="./src/assets/Browser.png"
              className="z-50" //Poner position-absolute si queremos intentar sacar la imagen del contenedor
              alt="Browser"
            />
            <img
              src={images[openIndex] ? images[openIndex] : images[0]}
              className="absolute bottom-1 right-0 p-2 m-4" 
              alt="Content"
              style={{
                width: "95%",
                height: "83%",
                objectFit: "cover",
                objectPosition: "top",
                transition: "opacity 0.3s ease-in-out",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
