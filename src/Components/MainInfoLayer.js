import React from "react";

const MainInfoLayer = ({ original_title, overview }) => {
  return (
    <div className="pt-[15%] absolute px-16 text-white bg-gradient-to-tr from-black w-screen aspect-video  ">
      <h1 className=" w-1/2 pb-4 font-bold text-6xl cursor-default">
        {original_title}
      </h1>
      <p className="w-1/3 py-6 text-lg cursor-default">{overview}</p>
      <div className="pt-4">
        <button className="border px-12 p-4 font-bold rounded-lg bg-white text-black cursor-pointer hover:bg-opacity-80">
          {" "}
          ► Play
        </button>
        <button className="border mx-4 px-12 p-4 font-bold rounded-lg bg-gray-400 bg-opacity-50 cursor-pointer hover:bg-opacity-80">
          {" "}
          ⦿ More Info{" "}
        </button>
      </div>
    </div>
  );
};

export default MainInfoLayer;
