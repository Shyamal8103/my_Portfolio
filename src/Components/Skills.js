import React from "react";
import html from "../assets/html.png";
import css from "../assets/css4.webp";
import javascript from "../assets/js.png";

import bootstrap from "../assets/bootstrap1.png";
import tailwind from "../assets/tailwind1.png";
import react from "../assets/react1.webp";
import nodejs from "../assets/nodejs1.png";
import expressjs from "../assets/express2.png";
import mongodb from "../assets/mongodb1.png";

const Skills = () => {
  const skillsList = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 2, src: javascript, title: "Javascript", style: "shadow-yellow-500" },
    { id: 3, src: bootstrap, title: "Bootstrap", style: "shadow-purple-900" },
    { id: 4, src: tailwind, title: "Tailwind", style: "shadow-indigo-600" },
    { id: 5, src: react, title: "React", style: "shadow-cyan-300" },
    { id: 6, src: nodejs, title: "Node", style: "shadow-lime-400" },
    { id: 7, src: expressjs, title: "Express", style: "shadow-white" },
    { id: 8, src: mongodb, title: "MongoDb", style: "shadow-green-500" },
  ];
  return (
    <div id="skills" className="bg-gradient-to-b from-black to-gray-800">
      <div className="felx flex-col md:px-12 py-10 justify-center">
        <h1 className="text-gray-500 text-center text-5xl">Skills</h1>
        <div className="w-full grid grid-cols-2 md:grid-cols-3  px-5 py-12 gap-10">
          {skillsList.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`flex flex-col  items-center shadow-md hover:scale-105 duration-500 rounded-lg ${style}`}
              >
                <img
                  src={src}
                  alt=""
                  width={150}
                  height={150}
                  className="mt-10"
                />
                <h2 className="text-white text-2xl text-center py-3">
                  {title}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
