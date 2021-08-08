import React from "react";
import { generateRandomNumber, getRandomName } from "../../utils/utils";
import Profile from "../Profile";
import Rating from "../Rating";
import styles from "./card.module.css";
import { getRandomTestimonial } from "../../utils/utils";

const TestimonialCard = () => {
  const {
    image,
    rating = generateRandomNumber(5),
    comment = "“I love it! No more air fresheners”",
    name = getRandomName(),
  } = getRandomTestimonial();
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Profile img={image}></Profile>
      </div>
      <div className={styles.rating}>
        <Rating rating={rating}></Rating>
      </div>
      <div className={styles.comment}>{comment}</div>
      <b className={styles.name}>{name}</b>
    </div>
  );
};

export default TestimonialCard;
