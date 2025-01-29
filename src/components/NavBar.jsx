import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("Link");
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-30">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link to="/" className="logo">
            <img src="src/assets/Logo_descriptivo.png" className="h-10" alt="Logo" />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggle} className="text-gray-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <ul className="lg:flex lg:justify-end text-base text-gray-700">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link mx-3 activeLink" : "nav-link mx-3 Link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Nosotros"
                className={({ isActive }) =>
                  isActive ? "nav-link mx-3 activeLink" : "nav-link mx-3 Link"
                }
              >
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Servicios"
                className={({ isActive }) =>
                  isActive ? "nav-link mx-3 activeLink" : "nav-link mx-3 Link"
                }
              >
                Servicios
              </NavLink>
            </li>
            <li className="relative group">
              <button
                onMouseOver={() => setColor("activeLink")}
                onMouseLeave={() => setColor("Link")}
                className={`nav-link mx-3 ${color}`}
              >
                Proyectos
              </button>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="#">Option 1</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="#">Option 2</Link>
                </li>
                <li className="border-t px-4 py-2 hover:bg-gray-200">
                  <Link to="#">Reset</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
