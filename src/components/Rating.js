import React from "react";
import { ReactComponent as Star } from "./assets/icons/star_black_24dp.svg";
import { ReactComponent as StarBorder } from "./assets/icons/star_border_black_24dp.svg";

function Rating(props) {
  const { rating, maxRating = 5, color = "black" } = props;
  const constructRatingBar = (maxRating = 5, currentRating = 0) => {
    const nrEmptyStars = maxRating - currentRating;
    const ratingBar = Array(currentRating)
      .fill(<Star fill={color}></Star>)
      .concat(Array(nrEmptyStars).fill(<StarBorder fill={color}></StarBorder>));
    return ratingBar;
  };
  return (
    <div className="rating">
      <span>{constructRatingBar(maxRating, rating)}</span>
    </div>
  );
}

export default Rating;
