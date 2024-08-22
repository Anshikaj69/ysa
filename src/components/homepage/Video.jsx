import React, { useState, useRef } from "react";
import Tooltip from '@mui/material/Tooltip';
import { Play, Pause } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import {Cloudinary} from '@cloudinary/url-gen'
import envCompatible from 'vite-plugin-env-compatible'


const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const cld = new Cloudinary({
    cloud: {
      cloudName : import.meta.env.REACT_APP_CLOUD_NAME
    }
  })

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex 2xl:my-16 md:my-14 w-full justify-end self-end items-end">
      <div className="flex relative rounded-[1.2rem] 2xl:border-[7px] border-[4px] md:border-[5px] border-white aspect-[21/9] md:aspect-[16/9] items-center justify-center bg-white transition md:w-[90%] h-fit 2xl:w-fit">
        {!isPlaying && (
          
          <div className=" flex items-center justify-center aspect-[21/9] md:aspect-[16/9]  2xl:w-fit">
            <img 
              src="/heroImg.svg"
              alt="Thumbnail" 
              className="w-full h-full object-cover rounded-2xl"
              loading="eager"
            />
            <Fade>
            <button
              onClick={togglePlayPause}
              className="h-[50px] w-[50px] md:h-[70px] md:w-[70px] flex items-center justify-center bg-[#ffffffd6] backdrop-blur-xl shadow-md rounded-full absolute md:top-[35%] md:right-[45%] top-[33%] right-[44%]"
            >
              <Tooltip title="Play" placement="bottom">
                <Play color="#253359" className="md:h-[48px] h-[28px]" fill="#253359"/>
              </Tooltip>
            </button>
            </Fade>
          </div>
        )}
        <Fade>
        <div className={`flex h-fit 2xl:w-fit justify-center aspect-[21/9] md:aspect-[16/9]  ${isPlaying ? 'block' : 'hidden'}`}>
        <video
          ref={videoRef}
          src={cld.video('/hero_video').quality('auto').toURL()}
          className={`rounded-[1rem] border-0 2xl:w-full flex justify-end items-end object-cover aspect-[21/9] md:aspect-[16/9]`}
          loop
        ></video>
        </div>
        </Fade>
        {isPlaying && (
          <Fade>
          <button
            onClick={togglePlayPause}
            className="h-[50px] w-[50px] md:h-[70px] md:w-[70px] flex items-center justify-center bg-[#ffffffd6] backdrop-blur-xl shadow-md rounded-full mr-4 absolute top-[30%] right-[40%] md:top-[36%] md:right-[43%] "
          >
            <Tooltip title="Pause" placement="bottom">
              <Pause color="#253359" className="md:h-[48px] h-[28px]" fill="#253359" />
            </Tooltip>
          </button>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default Video;
