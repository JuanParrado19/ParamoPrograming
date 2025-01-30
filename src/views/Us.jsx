import React from "react";
import VideoUs from "../components/VideoUs";
import TeamGrid from "../components/TeamGrid";

const teamMembers = [
  {
    name: "Juan Parrado",
    role: "Desarrollador Fullstack",
    image: "src/assets/FotoParrado.jpeg",
    description: "Experto en arquitectura de servidores y bases de datos.",
    linkedin: "https://linkedin.com/in/juanperez",
    github: "https://github.com/juanperez",
  },
  {
    name: "Iván Guitierrez",
    role: "Desarrollador Backend",
    image: "src/assets/FotoIvan.jpeg",
    description: "Experto en arquitectura de servidores y bases de datos.",
    linkedin: "https://linkedin.com/in/anagomez",
    github: "https://github.com/anagomez",
  },
  {
    name: "Juan ",
    role: "Desarrollador Backend",
    image: "https://picsum.photos/200/300",
    description: "Experto en arquitectura de servidores y bases de datos.",
    linkedin: "https://linkedin.com/in/carlosruiz",
    github: "https://github.com/carlosruiz",
  },
  {
    name: "César Giraldo",
    role: "Desarrollador Frontend",
    image: "src/assets/FotoCesar.jpeg",
    description: "Experto en arquitectura de servidores y bases de datos.",
    linkedin: "https://linkedin.com/in/marialopez",
    github: "https://github.com/marialopez",
  },
];

const Us = () => (
  <div className="d-block p-0" style={{ maxWidth: "100%" }}>
    <VideoUs />
    <h2 className="text-2xl font-bold text-center my-6">QUIENES SOMOS</h2>
    <TeamGrid teamMembers={teamMembers} />
  </div>
);

export default Us;
