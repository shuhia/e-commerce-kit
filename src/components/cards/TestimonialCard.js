import React from "react";

const styles = { container: { display: "flex", flexFlow: "row wrap" } };

const TestimonialCard = () => {
  return (
    <div styles={styles.container}>
      <div className="rating"></div>
      <div className="comment"></div>
      <div className="name"></div>
    </div>
  );
};

export default TestimonialCard;
