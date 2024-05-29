import React from "react";

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      title: "Subh Clinic Website",
      src: "/images/SubhClinic1.PNG",
      demo: "https://doctor-clinic-neon.vercel.app/",
      code: "https://github.com/Shyamal8103/DoctorClinic",
    },
    {
      id: 2,
      title: "Stone Paper Scissor Game",
      src: "/images/RockPaperScissor.PNG",
      demo: "https://stonepaperscissorgame.vercel.app/",
      code: "https://github.com/Shyamal8103/stonepaperscissorgame",
    },

    {
      id: 3,
      title: "Shopping Cart Website",
      src: "/images/ShoppingApp.PNG",
      demo: "https://shoping-cart-woad-ten.vercel.app/",
      code: "https://github.com/Shyamal8103/Shoping-Cart",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black sm:p-2 md:px-20">
      <div>
        <h1 className="text-center text-gray-500 text-5xl mb-20 ">Projects</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {myProjects.map(({ id, title, src, demo, code }) => {
            return (
              <div
                key={id}
                className="px-5 shadow-md shadow-gray-600 rounded-lg"
              >
                <h2 className="text-gray-400 text-center capitalize my-2 md:text-2xl ">
                  {title}
                </h2>
                <img
                  src={src}
                  alt="SubhClinic"
                  width={400}
                  height={300}
                  className="bg-white hover:scale-105 duration-200"
                />
                <div>
                  <button className="w-1/2 text-gray-400 font-bold py-4 hover:scale-105 duration-100">
                    <a href={demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  </button>
                  <button className="w-1/2 text-gray-400 font-bold py-4 hover:scale-105 duration-100">
                    <a href={code} target="_blank" rel="noreferrer">
                      Code
                    </a>{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
