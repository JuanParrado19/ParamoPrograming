import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import TeamCard from "../components/TeamCard.jsx";

const Team = () => {
  const [selectedCard, setSelectedCard] = useState(1); // La tarjeta central por defecto es la segunda

  const cardData = [
    {
      title: "Jumpa",
      subtitle: "Senior Front-End Developer",
      imgSrc: "https://picsum.photos/318/180",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      title: "Patas",
      subtitle: "Senior Back-End Developer",
      imgSrc: "https://picsum.photos/318/180",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      title: "Ivan",
      subtitle: "Senior Back-End Developer",
      imgSrc: "https://picsum.photos/318/180",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      title: "César",
      subtitle: "Senior Back-End Developer",
      imgSrc: "https://picsum.photos/318/180",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ];

  const getVisibleCards = () => {
    const prevIndex = (selectedCard - 1 + cardData.length) % cardData.length;
    const nextIndex = (selectedCard + 1) % cardData.length;
    return [prevIndex, selectedCard, nextIndex];
  };

  const handlePrevClick = () => {
    setSelectedCard((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setSelectedCard((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="justify-content-start p-5 ">
      <h1>Nuestro Equipo</h1>
      <div
        className="carousel-container"
        style={{
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          width: "100%" /* Asegurar que el contenedor ocupa todo el ancho */,
          margin: "auto",
          paddingBottom: "2vw",
        }}
      >
        <Button
          onClick={handlePrevClick}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </Button>
        <div
          className="carousel"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:
              "center" /* Centrar los elementos dentro del carrusel */,
            transition: "transform 0.5s ease-in-out",
            width: "100%",
          }}
        >
          {visibleCards.map((index) => (
            <TeamCard
              key={index}
              title={cardData[index].title}
              subtitle={cardData[index].subtitle}
              imgSrc={cardData[index].imgSrc}
              text={cardData[index].text}
              isSelected={selectedCard === index}
              style={{
                flex: selectedCard === index ? "1 0 80%" : "1 0 30%",
                maxWidth: selectedCard === index ? "80%" : "30%",
                margin: "0 10px",
                transition:
                  "transform 0.5s ease-in-out, flex 0.5s ease-in-out, max-width 0.5s ease-in-out",
                transform: selectedCard === index ? "scale(1.2)" : "scale(1)",
              }}
            />
          ))}
        </div>
        <Button
          onClick={handleNextClick}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default Team;
