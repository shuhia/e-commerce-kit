import React from "react";
import Profile from "../Profile";
import Rating from "../Rating";
import styles from "./card.module.css";

const TestimonialCard = ({
  image,
  rating = 5,
  comment = "“I love it! No more air fresheners”",
  name = "Luisa",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Profile></Profile>
      </div>
      <div className={styles.rating}>
        <Rating rating={rating}></Rating>
      </div>
      <div className={styles.comment}>
        <b>{comment}</b>
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default TestimonialCard;
