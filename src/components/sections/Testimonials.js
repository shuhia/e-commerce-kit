import React from "react";
import TestimonialCard from "../cards/TestimonialCard";
import Section from "./Section";
import styles from "./testimonials.module.css";

function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="Testimonials"
      description="Some quotes from our
      happy customers"
    >
      <div
        className="carusell"
        style={{
          display: "flex",

          width: "100%",
          overflowX: "scroll",
          overflowY: "none",
        }}
      >
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
      </div>
    </Section>
  );
}

export default Testimonials;
