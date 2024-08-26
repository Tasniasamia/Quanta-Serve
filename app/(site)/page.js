"use client";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const Page = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    if (video) {
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
    }

    // Clean up event listeners when component unmounts
    return () => {
      if (video) {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="container relative">
      <h1 className="text-center text-2xl text-primary">This is Home Page</h1>
      
      <div className="relative lg:w-[424px] w-full h-[300px]">
        <video
          ref={videoRef}
          className="w-full h-full border-2 border-primary"
          poster="/coach.webp"
          controls
          muted
        >
          <source src="/coaching.mp4" type="video/mp4" />
        </video>

        {!isPlaying && (
          <button
            className="h-[44px] w-[44px] rounded-full flex justify-center items-center bg-primary text-white cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            onClick={handlePlayPause}
          >
            <FaPlay className="!text-[20px]" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;
