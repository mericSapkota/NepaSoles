import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const TrendingCollections = () => {
  const images = [
    "/trending_1.jpg",
    "/trending_2.jpg",
    "/trending_1.jpg",
    "/trending_2.jpg",
    "/trending_1.jpg",
    "/trending_2.jpg",
    "/trending_1.jpg",
    "/trending_2.jpg",
    "/trending_1.jpg",
    "/trending_2.jpg",
  ];

  const navigate = useNavigate();
  const goToShopPage = () => {
    navigate("/shop");
  };

  const scrollContainerRef = useRef(null);
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className=" p-5  text-white ">
      <div className="flex items-center gap-3">
        <div>Trending Collections</div>
        <div className=" h-[1px] w-1/2 md:w-[300px] bg-gray-300 mr-auto"></div>
        <div className="flex gap-1">
          <ChevronLeftIcon onClick={() => scroll("left")} className="h-5 cursor-pointer" />
          <ChevronRightIcon onClick={() => scroll("right")} className="h-5 cursor-pointer" />
        </div>
      </div>
      <div ref={scrollContainerRef} className=" scroll-smooth  flex w-full overflow-x-auto gap-8 mx-3 my-5">
        {images.map((image, index) => (
          <img
            className="md:h-96 h-[400px] hover:scale-110 duration-150 ease-in-out cursor-pointer rounded-lg"
            src={image}
            alt="Shoe"
            key={index}
            onClick={goToShopPage}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingCollections;
