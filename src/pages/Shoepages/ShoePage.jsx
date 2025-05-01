import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { calculateDiscount } from "../../components/util";
import SelectSize from "../../components/SelectSize";
import { ChevronDownIcon, HeartIcon } from "@heroicons/react/24/outline";

import Review from "./Review";

const ShoePage = () => {
  const { id } = useParams();
  const [requiredProduct, setRequiredProduct] = useState({});
  const [shippingToggled, setShippingToggled] = useState(false);
  const [reviewToggled, setReviewToggled] = useState(false);

  const images = ["BLAZER.png", "BLAZER1.png", "BLAZER2.png", "BLAZER4.png", "BLAZER4.png", "BLAZER4.png"];
  const reviews = [
    {
      name: "John Doe",
      rating: 3,
      review: "Great shoes! Very comfortable and stylish.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      review: "I love these shoes! They fit perfectly and look amazing.",
    },
    {
      name: "Mathilda Smith",
      rating: 5,
      review: "I love these shoes! They fit perfectly and look amazing.",
    },
    {
      name: "Joy Smith",
      rating: 5,
      review: "I love these shoes! They fit perfectly and look amazing.",
    },
  ];

  let shoesInfo = [
    {
      id: 1,
      name: "Air Jordan 1 Retro High OG ",
      status: "New Arrival",
      price: 200,
      brand: "Nike",
      numberofcolors: 3,
      image: "/AJ1.png",
      availableSizes: [31, 32, 33, 34, 35],
      discount: 20,
    },
    {
      id: 2,
      name: "Air Jordan 1 Retro High OG 'Bred'",
      status: "New Arrival",
      price: 180,
      brand: "Nike",
      numberofcolors: 2,
      image: "/AJ2.jpg",
      availableSizes: [31, 32, 33, 34, 35],
      discount: 0,
    },
    {
      id: 5,
      name: "Air Jordan 1 Retro High OG 'Royal'",
      price: 190,
      brand: "Reebook",
      status: "Best Seller",
      numberofcolors: 4,
      availableSizes: [31, 32, 33, 34, 35],
      image: "/AJ1Brooklyn.png",
      discount: 10,
    },
    {
      id: 3,
      name: "Air Jordan 1 Retro High OG",
      price: 170,
      brand: "Adidas",
      status: "Best Seller",
      numberofcolors: 3,
      availableSizes: [31, 32, 33, 34, 35],
      image: "/AJ1low.png",
      discount: 0,
    },
    {
      id: 4,
      name: "Air Jordan 1 Retro High OG 'Black and White'",
      price: 160,
      brand: "Puma",
      status: "Best Seller",
      availableSizes: [31, 32, 33, 34, 35],
      numberofcolors: 5,
      image: "/AJ1methodofmake.png",
      discount: 15,
    },
  ];

  useEffect(() => {
    if (id) {
      const answer = shoesInfo.find((shoe) => shoe.id === Number(id));
      setRequiredProduct(answer);
    }
  }, [id]);
  return (
    <div>
      <Header />
      <div>
        <div className="sm:flex sm:flex-col lg:px-[10%] sm:gap-2 lg:grid lg:grid-cols-2 lg:gap-5 ">
          {/* Shoe details */}
          <div className="p-5  md:p-10">
            <p className="text-xl">{requiredProduct.name}</p>
            <p>{requiredProduct.brand}</p>

            <div className="font-semibold text-lg ">
              {(requiredProduct.discount != 0 && (
                <div className="flex gap-2">
                  {calculateDiscount(requiredProduct.price, requiredProduct.discount)}
                  <p className="text-green-700">{requiredProduct.discount}% off</p>
                </div>
              )) || <div>${info.price}</div>}
            </div>
            {/* other details */}
            <div className=" flex-col hidden lg:flex gap-5 mt-5 p-5 ">
              {/* Size */}
              <div className="flex justify-between">
                <p>Select Size</p>
                <SelectSize />
              </div>
              <div className="flex gap-5">
                {requiredProduct.availableSizes &&
                  requiredProduct.availableSizes.map((size) => (
                    <div className="outline-black outline-1 w-24 px-4 py-2">
                      <div className="text-center">{size}</div>
                    </div>
                  ))}
              </div>
              {/* //Note */}
              <div className="">
                For easier entry, we recommend unlacing the top 4 eyelets and slightly loosening the laces farther down
              </div>
              {/* Add to cart buttons */}
              <div className="flex flex-col gap-3 ">
                <div className="rounded-full w-full py-4 text-white bg-black text-center">Add to Cart</div>
                <div className="rounded-full w-full py-4 outline-1 outline-black text-center flex items-center justify-center gap-2">
                  <p>Favourite</p> <HeartIcon className="h-5" />
                </div>
              </div>

              <div className="flex flex-col my-5  gap-5">
                {/* Shipping and returns */}
                <div className="flex flex-col shadow-lg rounded-2xl p-3 justify-center ">
                  <div
                    className="flex justify-between mb-5 items-center cursor-pointer"
                    onClick={() => setShippingToggled(!shippingToggled)}
                  >
                    <p className="text-xl ">Shipping and Returns</p>
                    {shippingToggled ? (
                      <ChevronDownIcon className="h-5 rotate-180 duration-150" />
                    ) : (
                      <ChevronDownIcon className="h-5  duration-150" />
                    )}
                  </div>
                  <div
                    className={` overflow-hidden transition-all duration-250  ease-in-out ${
                      shippingToggled ? " visible   opacity-100 max-h-[500px]" : "max-h-[0px] opacity-0 invisible"
                    }`}
                  >
                    Free standard shipping on orders $50+ and free 60-day returns for Nike Members.{" "}
                    <span className="underline font-semibold">Learn more.</span> Return policy exclusions apply.{" "}
                    <span className="underline cursor-pointer">Pick-up available</span> at select Nike Stores.
                  </div>
                </div>
                {/* //Reviews */}
                <Review reviews={reviews} reviewToggled={reviewToggled} setReviewToggled={setReviewToggled} />
              </div>
            </div>
          </div>
          {/* Shoe images */}
          <div className="lg:row-start-1 flex flex-col lg:flex lg:flex-row-reverse lg:gap-2  mt-5 p-0">
            <div className="w-full  lg:h-max">
              <img src="/AJ1/BLAZER.png" className="w-full   lg:min-w-[350px] max-h-full object-cover " alt="" />
            </div>

            <div className="flex mt-5 lg:mt-0 gap-5 lg:w-[60px]   lg:flex-col lg:gap-1 lg:overflow-x-visible overflow-x-scroll ">
              {images.map((image) => (
                <div className=" min-h-[125px] min-w-[125px] lg:min-w-[60px] lg:min-h-[60px] bg-black">
                  <img src={`/AJ1/${image}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          {/* Other Detials */}
          <div className=" lg:hidden flex flex-col gap-5 mt-5 p-5 lg:p-10">
            {/* Size */}
            <div className="flex justify-between">
              <p>Select Size</p>
              <SelectSize />
            </div>
            <div className="flex gap-5">
              {requiredProduct.availableSizes &&
                requiredProduct.availableSizes.map((size) => (
                  <div className="outline-black outline-1 w-24 px-4 py-2">
                    <div className="text-center">{size}</div>
                  </div>
                ))}
            </div>
            {/* //Note */}
            <div className="">
              For easier entry, we recommend unlacing the top 4 eyelets and slightly loosening the laces farther down
            </div>
            {/* Add to cart buttons */}
            <div className="flex flex-col gap-3 ">
              <div className="rounded-full w-full py-4 text-white bg-black text-center">Add to Cart</div>
              <div className="rounded-full w-full py-4 outline-1 outline-black text-center flex items-center justify-center gap-2">
                <p>Favourite</p> <HeartIcon className="h-5" />
              </div>
            </div>

            <div className="flex flex-col my-5  gap-5">
              {/* Shipping and returns */}
              <div className="flex flex-col shadow-lg rounded-2xl p-3 justify-center ">
                <div
                  className="flex justify-between mb-5 items-center cursor-pointer"
                  onClick={() => setShippingToggled(!shippingToggled)}
                >
                  <p className="text-xl ">Shipping and Returns</p>
                  {shippingToggled ? (
                    <ChevronDownIcon className="h-5 rotate-180 duration-150" />
                  ) : (
                    <ChevronDownIcon className="h-5  duration-150" />
                  )}
                </div>
                <div
                  className={` overflow-hidden transition-all duration-250  ease-in-out ${
                    shippingToggled ? " visible   opacity-100 max-h-[500px]" : "max-h-[0px] opacity-0 invisible"
                  }`}
                >
                  Free standard shipping on orders $50+ and free 60-day returns for Nike Members.{" "}
                  <span className="underline font-semibold">Learn more.</span> Return policy exclusions apply.{" "}
                  <span className="underline cursor-pointer">Pick-up available</span> at select Nike Stores.
                </div>
              </div>
              {/* //Reviews */}
              <Review reviews={reviews} reviewToggled={reviewToggled} setReviewToggled={setReviewToggled} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShoePage;
