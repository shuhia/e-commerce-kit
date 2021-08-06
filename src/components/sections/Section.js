/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./section.css";
import styles from "./section.module.css";

function Section(props) {
  const {
    id = "",
    title = "title",
    description = "description",
    content,
  } = props;
  return (
    <section id={"section-" + id} className={styles.container}>
      <a href="#test" id={id}></a>
      <header className={styles.header}>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <div className={styles.content}>{content}</div>
      {props.children}
    </section>
  );
}

export default Section;
