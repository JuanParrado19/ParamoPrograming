"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mountain, Code, Rocket, Users, Zap } from "lucide-react";

export default function ParamoProgramming() {
  const [activeSection, setActiveSection] = useState("values");

  const sections = {
    values: {
      title: "Valores",
      items: [
        { icon: <Code className="w-6 h-6" />, text: "Codigo de calidad" },
        { icon: <Users className="w-6 h-6" />, text: "Centrado en el cliente" },
        { icon: <Zap className="w-6 h-6" />, text: "Innovación" },
      ],
    },
    mission: {
      title: "Misión",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero eros. Sed sit amet libero eros. Sed sit amet libero eros.",
    },
    vision: {
      title: "Visión",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero eros. Sed sit amet libero eros. Sed sit amet libero eros.",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-paramo-100 to-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center">
          Paramo Programming
        </h1>
        <p className="text-xl text-paramo-primary-100 italic">
          Desarrollo de cima y a la medida
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 rounded-md text-lg transition-colors duration-200 ${
              activeSection === section
                ? "bg-paramo-secondary text-white"
                : "bg-white text-paramo-secondary-700 hover:bg-sky-100"
            }`}
          >
            {sections[section].title}
          </button>
        ))}
      </div>

      <motion.div
        key={activeSection}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg shadow-xl p-6">
          {activeSection === "values" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sections.values.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-sky-200 rounded-full p-3 mb-2">
                    {item.icon}
                  </div>
                  <p className="font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-lg text-center"
            >
              {sections[activeSection].content}
            </motion.p>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <button className="bg-paramo-secondary hover:bg-paramo-secondary-600 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center justify-center">
          <Rocket className="w-4 h-4 mr-2" /> Empieza ahora!
        </button>
      </motion.div>
    </div>
  );
}
