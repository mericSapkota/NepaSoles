import React, { useEffect } from "react";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import UserRating from "../../components/UserRating";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Halfstar, OneThirdStar, TwoThirdStar } from "../../assets/Halfstar";

const Review = ({ reviews, reviewToggled, setReviewToggled }) => {
  const calculateAverageRating = (reviews) => {
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  };

  const averageRating = calculateAverageRating(reviews);
  let afterDecimal = averageRating.split(".")[1];
  let beforeDecimal = averageRating.split(".")[0];
  let stars = [];

  for (let i = 0; i < beforeDecimal; i++) {
    stars.push(<StarSolid className="h-5" />);
  }

  if (afterDecimal < 5 && afterDecimal > 0 && stars.length < 5) {
    stars.push(<OneThirdStar />);
  }
  if (afterDecimal == 5 && stars.length < 5) {
    stars.push(<Halfstar />);
  }
  if (afterDecimal > 5 && stars.length < 5) {
    stars.push(<TwoThirdStar />);
  }
  while (stars.length < 5) {
    stars.push(<StarOutline className="h-5 " />);
  }

  console.log("Average Rating:", beforeDecimal);
  return (
    <>
      <div className="flex flex-col shadow-lg rounded-2xl p-4 justify-center ">
        <div
          className="flex justify-between mb-5 items-center cursor-pointer"
          onClick={() => setReviewToggled(!reviewToggled)}
        >
          <p className="text-xl ">Reviews ({reviews.length})</p>
          <div className="flex gap-3">
            <div className="flex gap-1">
              {stars}
              <p>{averageRating}</p>
            </div>

            {reviewToggled ? (
              <ChevronDownIcon className="h-5 rotate-180 duration-150 rotat" />
            ) : (
              <ChevronDownIcon className="h-5  duration-150" />
            )}
          </div>
        </div>
        <div
          className={` overflow-hidden transition-all duration-250  opacity-0 ease-in-out ${
            reviewToggled ? " visible   opacity-100 max-h-[500px]" : "max-h-[0px] invisible"
          }`}
        >
          <UserRating reviews={reviews} />
        </div>
      </div>
    </>
  );
};

export default Review;
