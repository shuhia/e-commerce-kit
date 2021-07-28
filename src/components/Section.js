import React from "react";

function Section(props) {
  return (
    <section className="section">
      <div className="section-header"></div>
      <div className="section-content"></div>
      {props.children}
    </section>
  );
}

export default Section;
