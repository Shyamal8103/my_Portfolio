import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const socialList = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/shyamal-bhattacharya-3505561a6/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Shyamal8103?tab=repositories",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:shivakumarsk5308@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Shyamal Bhattacharya.pdf",
      download: true,
    },
  ];
  return (
    <div className="hidden md:flex flex-col fixed top-[35%] left-0">
      <ul>
        {socialList.map(({ id, child, href, download, style }) => {
          return (
            <li
              key={id}
              className="flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-800"
            >
              <a
                href={href}
                className="flex items-center w-full text-white justify-between"
                target="_blank"
                download={download}
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
