import React, { useState } from "react";

const Posters = () => {
  const [mouseHoverIndex, setMouseHoverIndex] = useState(null);
  const posters = ["shoes.svg", "poster-2.png", "poster-3.png"];

  return (
    <>
      <div className="flex  w-full  gap-10 p-5 mx-3  lg:justify-center overflow-auto">
        {posters.map((poster, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              setMouseHoverIndex(index);
            }}
            onMouseLeave={() => {
              setMouseHoverIndex(null);
            }}
            className="relative min-w-[300px]"
          >
            <img
              src={poster}
              key={index}
              className={` w-full  md:h-96 h-[400px]  object-cover " alt="poster ${
                mouseHoverIndex === index ? "opacity-65" : ""
              }`}
            />
            <button
              className={`absolute cursor-pointer  ${
                mouseHoverIndex === index ? "visible" : "invisible"
              }  z-10 top-1/2 hover:opactiy-100  left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-full px-3 py-2`}
            >
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posters;
