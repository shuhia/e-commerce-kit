import React from "react";
import footerLogo from "../assets/logo/footer-logo.png";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { useHistory } from "react-router";

function Footer(props) {
  const lists = props.footerLinks;
  const history = useHistory();

  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.widgets}>
          <aside>
            <div>
              <img
                src={footerLogo}
                alt="footer logo"
                onClick={() => {
                  history.push("/");
                  window.scrollTo(0, 0);
                }}
              />
              <p>
                Your natural candle made for your home and for your wellness.
              </p>
            </div>
          </aside>
          <div>
            {lists.map((list, index) => {
              return (
                <>
                  <ul key={"ul" + index}>
                    <Link key={"link-" + index} to={list.name}>
                      <h3 key={"h3" + index}>{list.name}</h3>
                    </Link>

                    {list.links.map((name, index) => {
                      return (
                        <li key={"listItem-" + index}>
                          <Link
                            className={styles.link}
                            key={"link-" + index}
                            to={"/" + name.replaceAll(" ", "").toLowerCase()}
                          >
                            {name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <a href="#copyright">©Candleaf All Rights Reserved.</a>
        <a href="https://github.com/shuhia/e-commerce-kit">
          Implemented by Alex On
        </a>
      </div>
    </footer>
  );
}

export default Footer;
