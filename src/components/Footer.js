import React from "react";
import footerLogo from "../images/footer-logo.png";

function Footer(props) {
  const { lists } = props;

  return (
    <div>
      <footer>
        <div className="footer-widgets">
          <aside>
            <div>
              <img src={footerLogo} />
              <p>
                Your natural cnadle made for your home and for your wellness.
              </p>
            </div>
          </aside>
          <div>
            {lists.map((list, index) => {
              return (
                <>
                  <ul key={index}>
                    <h1>{list.name}</h1>

                    {list.links.map((item, index) => {
                      return (
                        <li>
                          <a href="#">{item}</a>
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
        <a>©Candleaf All Rights Reserved.</a>
      </div>
    </div>
  );
}

export default Footer;
