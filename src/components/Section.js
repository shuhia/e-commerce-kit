/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function Section(props) {
  const { id = "" } = props;
  return (
    <section className="section">
      <a href="#test" id={id}></a>
      <div className="section-header"></div>
      <div className="section-content"></div>
      {props.children}
    </section>
  );
}

export default Section;
