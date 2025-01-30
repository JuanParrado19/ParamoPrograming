import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const TeamMember = ({ name, role, image, description, linkedin, github }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSprint = useSpring(x, { stiffness: 500, damping: 20 });
  const mouseYSprint = useSpring(y, { stiffness: 500, damping: 20 });

  const rotateX = useTransform(mouseYSprint, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSprint, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col p-6 bg-white rounded-lg shadow-xl border border-gray-200 relative"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Logo de Paramo en la esquina superior derecha */}
      <img
        src="src/assets/Logo_descriptivo.png"
        className="h-6 absolute top-4 right-4"
        alt="Logo Paramo"
      />

      {/* Contenedor principal: Imagen y contenido */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Imagen */}
        <img
          src={image}
          alt={name}
          className="w-32 h-40 rounded-lg object-cover border-2 border-gray-200"
        />

        {/* Contenido a la derecha */}
        <div className="text-left flex-1">
          {/* Nombre y Rol */}
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <p className="text-gray-600">{role}</p>
          <p className="text-sm text-gray-500">Paramo Programming</p>

          {/* Descripción */}
          <p className="font-sans text-gray-700 flex-1 sm:text-left">
            {description}
          </p>

          {/* Botones de LinkedIn y GitHub (izquierda) */}
          <div className="flex justify-start items-center mt-6">
            <div className="flex space-x-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
