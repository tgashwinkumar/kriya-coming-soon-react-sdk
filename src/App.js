import React, { useState } from "react";

import {
  BsFillPlayFill,
  BsInstagram,
  BsFillPauseFill,
  BsLinkedin,
} from "react-icons/bs";
import { FiLink } from "react-icons/fi";

import "./styles/tailwind.output.css";

const VIDEO_LINK =
  "https://res.cloudinary.com/dksmk66vo/video/upload/v1674491001/FINAL_RENDER_v2_1_1_wwfmxf.mp4";

const LOGO_LINK =
  "https://res.cloudinary.com/dksmk66vo/image/upload/v1674462504/KRIYA_gold_1_lfeukx.png";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlay = () => {
    document.querySelector("video").paused
      ? document.querySelector("video").play()
      : document.querySelector("video").pause();

    setIsPlaying(!document.querySelector("video").paused);
  };

  return (
    <main className="lg:h-screen w-screen oveflow-x-hidden lg:overflow-y-hidden flex flex-col items-center justify-start font-montserrat relative">
      <div className="h-[80vh] overflow-hidden bg-black w-screen relative">
        <div className="flex flex-col space-y-8 absolute bottom-8 left-8 z-50">
          <a
            href="https://www.instagram.com/kriya_psgtech/?hl=en"
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram
              size={24}
              className="text-gray-400 hover:text-white transition-all"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/studentsunion-psgtech/"
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin
              size={24}
              className="text-gray-400 hover:text-white transition-all"
            />
          </a>
          <a
            href="https://linktr.ee/su.psgtech"
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <FiLink
              size={24}
              className="text-gray-400 hover:text-white transition-all"
            />
          </a>
        </div>
        <video
          width="320"
          height="240"
          controls={false}
          autoPlay
          onEnded={() => setIsPlaying(false)}
          className="h-screen w-full lg:w-screen aspect-video absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] object-cover"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          muted
        >
          <source src={VIDEO_LINK} type="video/mp4" />
        </video>
      </div>
      <footer className="w-screen flex flex-col lg:flex-row justify-center items-center h-full lg:h-[20vh]">
        <section className="bg-white w-full lg:w-1/2 p-8 h-full flex flex-col lg:flex-row lg:items-center lg:justify-start justify-center relative space-y-4 lg:space-y-0">
          <button
            className="lg:hidden p-4 bg-gray-700 border-2 border-white text-white shadow-lg top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full absolute"
            onClick={handlePlay}
          >
            {isPlaying ? (
              <BsFillPauseFill size={32} />
            ) : (
              <BsFillPlayFill size={32} />
            )}
          </button>
          <p className="text-sm mr-16">Presented by</p>
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dksmk66vo/image/upload/v1674460965/PSG_College_of_Technology_logo_4_eqv5fb.png"
              alt=""
              className="h-16 w-12 lg:w-auto mr-4"
            />
            <div className="">
              <h2 className="font-semibold text-lg uppercase">
                STUDENTS UNION
              </h2>
              <h1 className="uppercase text-sm">PSG College of Technology</h1>
              <h1 className="text-xs">Coimbatore</h1>
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row items-stretch  w-full lg:w-1/2 h-full relative">
          <button
            className="hidden lg:block p-4 bg-gray-700 border-2 border-white text-white shadow-lg top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full absolute"
            onClick={handlePlay}
          >
            {isPlaying ? (
              <BsFillPauseFill size={32} />
            ) : (
              <BsFillPlayFill size={32} />
            )}
          </button>
          <div className="w-full lg:w-1/2 bg-gray-300 p-8 flex flex-col justify-center  text-black tracking-wider text-xl font-semibold">
            <p className="">Date</p>
            <p className="font-normal text-black tracking-wide">
              24<sup>th</sup> - 26<sup>th</sup> March, 2023
            </p>
          </div>
          <div className="w-full lg:w-1/2 bg-gray-500 p-8 flex flex-col justify-center text-white tracking-wider text-xl font-semibold">
            <p className="">The Global Clash of</p>
            <p className="font-normal">Techno Talents.</p>
          </div>
        </section>
      </footer>
    </main>
  );
};

export default App;
