import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React from "react";

export const ProductRating: ({
  product,
}: {
  product: any;
}) => JSX.Element[] = ({ product }) => {
  let rating: JSX.Element[] = [];

  if (product) {
    const filledStars = Math.floor(product.rating);
    const emptyStars = 5 - filledStars;

    rating = Array.from({ length: filledStars }, (_, index) => (
      <StarIcon key={index} />
    ));

    rating = rating.concat(
      Array.from({ length: emptyStars }, (_, index) => (
        <StarBorderIcon key={filledStars + index} />
      )),
    );
  }
  return rating;
};
