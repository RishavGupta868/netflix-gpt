import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const MainBackground = ({ movieId }) => {
  const trailerSelector = useSelector((store) => store.movieData?.trailer);

  useTrailerVideo(movieId);

  // if(!trailerSelector) return; why its not affecting here?
  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerSelector?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default MainBackground;
