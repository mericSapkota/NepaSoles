import React from "react";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

const UserStarRating = ({ reviews }) => {
  return (
    <>
      {reviews.map((review) => (
        <div className="flex flex-col gap-2 mb-5">
          <div className="flex gap-2">
            <p className="font-semibold">{review.name}</p>

            <div className="flex gap-1">
              {[...Array(5)].map((_, index) =>
                index < review.rating ? <StarSolid className="h-5" /> : <StarOutline className="h-5 " />
              )}
            </div>
          </div>
          <p>{review.review}</p>
        </div>
      ))}
    </>
  );
};

export default UserStarRating;
