import React from "react";
import myimage from "../assets/myimage.avif";
// import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="flex flex-col md:flex-row md:py-8 justify-center mx-w-screen-lg mx-auto items-center px-4">
        <div className="flex flex-col justify-center h-full">
          <h4 className="text-white text-xl ">Hello</h4>
          <h1 className="text-amber-300 my-2 max-w-md text-4xl sm:text-3xl font-bold">
            I'm Shyamal Bhattacharya
          </h1>
          <h2 className="text-white font-bold my-2 text-2xl">
            Frontend Developer
          </h2>
          <p className="text-white  my-2 max-w-md">
            An aspiring frontend developer, I bring fresh perspectives and
            dedication to crafting seamless user experiences. With a keen eye
            for design and a knack for problem-solving, I strive to create
            impactful digital solutions that leave a lasting impression.
          </p>
          {/* <div className="flex justify-end">
            <button className="flex items-center rounded-xl mt-4 px-5 p-2 bg-black text-white">
              Resume <MdOutlineFileDownload className="text-white ml-2" />
            </button>
          </div> */}
        </div>
        <div className="md:px-20 my-8">
          <img
            className="rounded-lg"
            width={300}
            height={300}
            src={myimage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
