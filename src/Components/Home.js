import React from "react";
import myimage from "../assets/myimage.avif";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
// import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
  // const { words } = useTypewriter({
  //   words: [
  //     "Frontend Developer",
  //     "React Developer",
  //     "Javascript Developer",
  //     "Software Developer",
  //   ],
  //   loop: {},
  // });

  // console.log(words);
  return (
    <div
      id="home"
      className=" h-screen w-full flex items-center bg-gradient-to-b from-black to-gray-800"
    >
      <div className="flex flex-col md:flex-row justify-center mx-w-screen-lg mx-auto items-center px-4">
        <div className="flex flex-col justify-center h-full">
          <h4 className="text-white text-xl ">Hello</h4>

          <h1 className="text-amber-300 my-2 max-w-md text-4xl md:text-7xl font-bold">
            I'm Shyamal Bhattacharya
          </h1>
          <h2 className="text-cyan-500 font-bold my-2 text-2xl">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Developer",
                "Javascript Developer",
                "Software Developer",
              ]}
              loop={Infinity}
            />
            <span>
              <Cursor />
            </span>
          </h2>
          <p className="text-white  my-2 max-w-md">
            An aspiring frontend developer, I bring fresh perspectives and
            dedication to crafting seamless user experiences. With a keen eye
            for design and a knack for problem-solving, I strive to create
            impactful digital solutions that leave a lasting impression.
          </p>
        </div>
        <div className="md:px-20 ">
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
