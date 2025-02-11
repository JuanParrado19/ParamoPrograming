import React from "react";
import VideoUs from "../components/VideoUs";
import TeamGrid from "../components/TeamGrid";
import PageTransitions from "../components/PageTransitions";
import OurCompany from "../components/OurCompany";

const teamMembers = [
  {
    name: "Juan Parrado",
    role: "Desarrollador Fullstack",
    image: "src/assets/FotoParrado.jpeg",
    description: "Experto en arquitectura de servidores y bases de datos.",
    linkedin: "https://www.linkedin.com/in/juan-manuel-parrado-gomez/",
    github: "https://github.com/JuanParrado19",
    barcode: "src/assets/Parrado-Barcode.png",
  },
  {
    name: "Iván Guitierrez",
    role: "Desarrollador Backend",
    image: "src/assets/FotoCesar.jpeg",
    description: "Experto en arquitectura de servidores y bases de datos.",
    linkedin: "https://www.linkedin.com/in/ivan-alejandro-gutierrez-espinosa/",
    github: "https://github.com/IvanGutierrez10",
    barcode: "src/assets/Ivan-Barcode.png",
  },
  {
    name: "Juan ",
    role: "Desarrollador Backend",
    image: "https://picsum.photos/200/300",
    description: "Experto en arquitectura de servidores y bases de datos.",
    linkedin:
      "https://www.linkedin.com/in/c%C3%A9sar-felipe-giraldo-mora-871ba723b/",
    github: "https://github.com/Cfgm1603",
    barcode: "src/assets/David-Barcode.png",
  },
  {
    name: "César Giraldo",
    role: "Desarrollador Frontend",
    image: "src/assets/FotoCesar.jpeg",
    description: "Experto en arquitectura de servidores y bases de datos.",
    linkedin:
      "https://www.linkedin.com/in/c%C3%A9sar-felipe-giraldo-mora-871ba723b/",
    github: "https://github.com/Cfgm1603",
    barcode: "src/assets/Cesar-Barcode.png",
  },
];

const Us = () => (
  <PageTransitions>
    <div className="w-full">
      <VideoUs />
      <OurCompany />
      <h2 className="text-4xl font-bold text-center my-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        QUIENES SOMOS
      </h2>
      <TeamGrid teamMembers={teamMembers} />
    </div>
  </PageTransitions>
);

export default Us;
