/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./section.css";
import styles from "./section.module.css";
import { useMediaQuery } from "react-responsive";

function Section(props) {
  const onMobile = useMediaQuery({ query: "(max-width:800px)" });

  const {
    id = "",
    title = "title",
    description = "description",
    content,
  } = props;
  return (
    <section id={"section-" + id}>
      <a href="#test" id={id}></a>
      <header className="section-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <div className="section-content">{content}</div>

      {props.children}
    </section>
  );
}

export default Section;

function SectionDesktop(props) {
  const {
    id = "",
    title = "title",
    description = "description",
    content,
  } = props;
  return (
    <section className={styles.desktop}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
        {content}
      </div>
      <aside className={styles.aside}></aside>
    </section>
  );
}

function SectionMobile(props) {
  const {
    id = "",
    title = "title",
    description = "description",
    content,
  } = props;
  return (
    <section className={styles.desktop}>
      <div className={styles.content}>
        <h1>{title}</h1>
        {content}
      </div>
      <aside className={styles.aside}></aside>
    </section>
  );
}

export { SectionDesktop, SectionMobile };
