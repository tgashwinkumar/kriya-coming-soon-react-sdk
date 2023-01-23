import { Player } from "video-react";
import "./styles/tailwind.output.css";
import "/node_modules/video-react/dist/video-react.css";
import { useEffect, useState } from "react";
import {
  BsFacebook,
  BsFillPlayFill,
  BsInstagram,
  BsTwitter,
  BsFillPauseFill,
} from "react-icons/bs";
import { FiLink } from "react-icons/fi";

const VIDEO_LINK =
  "https://res.cloudinary.com/dksmk66vo/video/upload/v1674456543/FINAL_RENDER_v2_1_u0bkpf.mp4";

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
    <main className="h-screen w-screen oveflow-x-hidden lg:overflow-y-hidden flex flex-col items-center justify-start font-montserrat relative">
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
            href="https://twitter.com/kriya_psgtech"
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter
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
      <section className="w-screen flex flex-col lg:flex-row justify-center items-center h-[20vh]">
        <div className="bg-white w-1/2 p-8 h-full  relative">
          {/* <img
            src={LOGO_LINK}
            alt=""
            className="h-48 w-auto absolute -top-36 left-8 z-30 drop-shadow-xl"
          /> */}
          <div className="flex w-full space-x-16 items-center">
            <p className="text-sm">Presented by</p>
            <div className="flex items-center space-x-4">
              <img
                src="https://res.cloudinary.com/dksmk66vo/image/upload/v1674460965/PSG_College_of_Technology_logo_4_eqv5fb.png"
                alt=""
                className="h-16 "
              />
              <div className="">
                <h2 className="font-semibold text-lg uppercase">
                  STUDENTS UNION
                </h2>
                <h1 className="uppercase text-sm">PSG College of Technology</h1>
                <h1 className="text-xs">Coimbatore</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  w-full lg:w-1/2 h-full relative">
          <button
            className="p-4 bg-gray-700 border-2 border-white text-white shadow-lg top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full absolute"
            onClick={handlePlay}
          >
            {isPlaying ? (
              <BsFillPauseFill size={32} />
            ) : (
              <BsFillPlayFill size={32} />
            )}
          </button>
          <div className="w-1/2 bg-gray-300 p-8 flex flex-col justify-center">
            <p className="text-gray-700 font-semibold">Date</p>
            <div className="text-lg text-black tracking-wide">
              24<sup>th</sup> - 26<sup>th</sup> March, 2023
            </div>
          </div>
          <div className="w-1/2 bg-gray-500 p-8 flex items-center">
            <p className="text-white tracking-wider text-xl font-semibold">
              The Global Clash of <br />
              <span className="font-normal">Techno Talents.</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
