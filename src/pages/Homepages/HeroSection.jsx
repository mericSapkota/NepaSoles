import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const images = ["/nike-just-do-it.jpg", "/home_background.jpg", "/another-background.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const goToShopPage = () => {
    navigate("/shop");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative ">
      <div className="h-[600px] w-full">
        <img src={images[currentImageIndex]} alt="Shoes" className={`w-full h-full  object-cover`} />
      </div>

      <div className="absolute inset-0 flex flex-col  items-center justify-center top-90 mb-10 md:mb-0 ">
        <div className="text-gray-300 text-2xl p-5 md:text-3xl lg:text-4xl ">
          Shoes That <span className="text-white">Speak</span> Before You Do
        </div>
        <button className="bg-white px-3 py-2 rounded-md cursor-pointer hover:scale-105" onClick={goToShopPage}>
          Shop Now
        </button>
        <div className="flex mt-2 gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-1 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-gray-500"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
