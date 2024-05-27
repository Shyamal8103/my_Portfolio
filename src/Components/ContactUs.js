import React, { useEffect, useRef, useState } from "react";
import { SiGooglemaps } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  //   const [inputClicked, setInputClicked] = useState(false);
  //   const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  //   const [userMessage, setUserMessage] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  //   const handleChangeclick = () => {
  //     setInputClicked(true);
  //   };
  //   const isvalidemail = () => {
  //     setIsEmail(false);
  //   };

  const validateEmail = () => {
    const isemail =
      userEmail.toLowerCase().endsWith("gmail.com") &&
      userEmail.toLowerCase().slice(-1) === "m";
    setIsEmail(isemail);
    console.log(isemail);
  };

  const validemail = (e) => {
    setUserEmail(e.target.value);

    // setIsEmail(validateEmail());
    validateEmail();
    // console.log(userEmail.toLowerCase().endsWith("gmail.com"));
    // console.log(isEmail);
  };

  const sentEmail = (e) => {
    e.preventDefault();

    // console.log(form.current);
    console.log("hi");

    // emailjs
    //   .sendForm("service_zx33b5i", "template_tln3229", form.current, {
    //     publicKey: "lh5SpTWnbeMLuG8a1",
    //   })
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     }
    //   );

    // e.target.reset();
  };

  useEffect(() => {}, [isEmail]);
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 p-5">
      <div className="flex flex-col justify-centerr items-center px-20">
        <div className="flex flex-col items-center">
          <h1 className="text-gray-400 text-5xl mt-20">Contact Us</h1>
          <p className="text-white text-center my-5">
            Thank you for reaching out! Your message is important to me, and I'm
            looking forward to connecting with you. I'll do my best to respond
            promptly to your inquiry, so please feel free to share any
            questions, feedback, or collaboration opportunities you have. Let's
            start this conversation and explore how we can work together to
            achieve great things!
          </p>
        </div>
        <div className="md:flex w-full justify-between">
          <div className=" m-8 w-1/2 p-10">
            <div className="flex items-center my-10">
              <div className="bg-white rounded-3xl p-4 hover:scale-105 duration-200">
                <SiGooglemaps />
              </div>
              <div className="mx-10">
                <p className="text-cyan-500 capitalize font-bold text-xl">
                  address
                </p>
                <p className="text-white">56, Vikas Nagar, Indore</p>
              </div>
            </div>

            <div className="flex items-center my-10">
              <div className="bg-white rounded-3xl p-4 hover:scale-105 duration-200">
                <IoMdCall />
              </div>
              <div className="mx-10">
                <p className="text-cyan-500 capitalize font-bold text-xl">
                  Phone
                </p>
                <p className="text-white">8103171103</p>
              </div>
            </div>

            <div className="flex items-center my-10">
              <div className="bg-white rounded-3xl p-4 hover:scale-105 duration-200">
                <IoMailOutline />
              </div>
              <div className="mx-10">
                <p className="text-cyan-500 capitalize font-bold text-xl">
                  Email
                </p>
                <p className="text-white">shivakumarsk5308@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex  md:w-1/2  md:mt-8 p-9">
            <div className="flex flex-col bg-white w-full border border-black items-start p-10">
              <h2 className="text-3xl my-3 font-bold">Send Message</h2>
              <form onSubmit={sentEmail} className="flex flex-col w-full my-2">
                <label
                  htmlFor="fullname"
                  className="text-gray-600 font-bold my-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  //   onChange={(e) => setUserName(e.target.value)}
                  name="user_name"
                  id="fullname"
                  className="border-b-2 my-2 border-gray-900 focus:outline-none"
                  //   onClick={handleChangeclick}
                  required
                />
                <label htmlFor="email" className="text-gray-600 font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={userEmail}
                  onChange={validemail}
                  //   onFocus={isvalidemail}
                  id="email"
                  className="border-b-2 my-2 border-gray-900 focus:outline-none"
                  required
                />
                {/* {isEmail ? (
                  ""
                ) : (
                  <p className="text-red-500">Please Input valid email</p>
                )} */}

                <label htmlFor="message" className="text-gray-600 font-bold">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  //   onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="type your message here..."
                  className="border-b-2 my-2 border-gray-900 focus:outline-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className=" bg-cyan-500 my-4 text-white text-xl rounded-md px-8 py-2"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
