import { useState, useRef } from "react";
import ServiceCard from "./ServiceCard";
import {
  faCode,
  faPaintBrush,
  faServer,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
const services = [
  {
    icon: faCode,
    title: "Desarrollo Web",
    description:
      "Creamos sitios web modernos y responsivos utilizando las últimas tecnologías y mejores prácticas del desarrollo web.",
    details: [{ text: "Frontend & Backend" }],
    supporters: ["src/assets/FotoCesar.jpeg", "src/assets/FotoParrado.jpeg"],
  },
  {
    icon: faPaintBrush,
    title: "Diseño UI/UX",
    description:
      "Creamos interfaces intuitivas y atractivas centradas en la experiencia del usuario.",
    details: [{ text: "Diseño Responsivo" }, { text: "Prototipos" }],
    isNew: true,
    supporters: ["src/assets/FotoCesar.jpeg", "src/assets/FotoParrado.jpeg"],
  },
  {
    icon: faServer,
    title: "Servicios Cloud",
    description:
      "Implementamos y gestionamos infraestructuras cloud escalables y seguras para tu negocio.",
    details: [{ text: "AWS & Azure" }, { text: "Serverless" }],
    supporters: ["src/assets/FotoIvan.jpeg", "src/assets/FotoParrado.jpeg"],
  },
  {
    icon: faDatabase,
    title: "Base de Datos",
    description:
      "Diseñamos y optimizamos bases de datos para garantizar un rendimiento óptimo y seguridad de datos.",
    details: [{ text: "SQL & NoSQL" }, { text: "Optimización" }],
    supporters: ["src/assets/FotoIvan.jpeg", "src/assets/FotoIvan.jpeg"],
  },
];

export default function ServiceCarousel() {
  const containerRef = useRef(null);

  return (
    <div className="w-full max-w-7xl mx-auto py-12">
      <div
        ref={containerRef}
        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar p-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="min-w-[300px] md:min-w-[450px] snap-center"
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
}
