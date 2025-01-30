import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white/50 backdrop-blur-md shadow-lg rounded-full px-3 py-2.5 z-50 w-[55%] flex items-center">
      {/* Logo con margen reducido a la derecha */}
      <Link to="/" className="flex-shrink-0 ml-7 mr-2">
        <img src="src/assets/Logo.png" className="h-8.5 w-auto" alt="Logo" />
      </Link>

      {/* Menú de navegación centrado y con márgenes equilibrados */}
      <ul className="flex flex-1 justify-between text-sm text-gray-800 mx-9">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-semibold"
                : "hover:text-blue-500 transition"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Nosotros"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-semibold"
                : "hover:text-blue-500 transition"
            }
          >
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Servicios"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-semibold"
                : "hover:text-blue-500 transition"
            }
          >
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Proyectos"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-semibold"
                : "hover:text-blue-500 transition"
            }
          >
            Proyectos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
