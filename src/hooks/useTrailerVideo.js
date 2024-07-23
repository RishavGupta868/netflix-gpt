import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../Utils/Store/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filteredOfficialTrailer = json.results.filter(
      (item) => item?.type === "Trailer" && item?.name === "Official Trailer"
    );
    const filteredTrailer = json.results.filter(
      (item) => item?.type === "Trailer"
    );
    const trailer = filteredOfficialTrailer.length
      ? filteredOfficialTrailer[0]
      : filteredTrailer[0]; //check this out later
    console.log(trailer);
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    movieTrailer();
  }, []);
};
export default useTrailerVideo;
