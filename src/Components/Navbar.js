import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const navlist = [
    { id: 1, title: "home" },
    { id: 1, title: "about" },
    { id: 1, title: "skills" },
    { id: 1, title: "projects" },
    { id: 1, title: "conact me" },
  ];
  return (
    <div className="w-full h-20 bg-black flex justify-between items-center p-5">
      <div>
        <h1 className="text-amber-300 text-3xl italic">SHYAMAL BHATTACHARYA</h1>
      </div>
      <ul className="hidden md:flex capitalize  gap-20">
        {navlist.map(({ id, title }) => {
          return (
            <li
              key={id}
              className="text-white font-medium hover:border-b hover:text-amber-300 hover:cursor-pointer"
            >
              {title}
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNavMenu(!navMenu)}
        className="text-3xl text-gray-500 md:hidden z-10 "
      >
        {navMenu ? <FaTimes /> : <FaBars />}
      </div>

      {navMenu && (
        <ul className="flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 w-full h-screen bg-black absolute top-0 left-0">
          {navlist.map(({ id, title }) => {
            return (
              <li
                key={id}
                className="capitalize cursor-pointer text-4xl py-4 text-gray-500"
              >
                {title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
