import React from "react";
import footerLogo from "../images/footer-logo.png";
import { Link } from "react-router-dom";

function Footer(props) {
  const { lists } = props;

  return (
    <div>
      <footer>
        <div className="footer-widgets">
          <aside>
            <div>
              <img src={footerLogo} alt="footer logo" />
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
                    <h3 key={"h3" + index}>{list.name}</h3>

                    {list.links.map((name, index) => {
                      return (
                        <li key={"listItem-" + index}>
                          <Link
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
      </footer>
      <div className="copyright">
        <a href="#copyright">©Candleaf All Rights Reserved.</a>
        <a href="https://github.com/shuhia/e-commerce-kit">
          Implemented by Alex On
        </a>
      </div>
    </div>
  );
}

export default Footer;
