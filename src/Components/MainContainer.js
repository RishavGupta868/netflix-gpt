import React from "react";
import MainInfoLayer from "./MainInfoLayer";
import MainBackground from "./MainBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movieSelector = useSelector(
    (store) => store.movieData?.nowPlayingMovies
  );
  if (!movieSelector) return;
  const mainMovie = movieSelector[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <MainInfoLayer original_title={original_title} overview={overview} />
      <MainBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
