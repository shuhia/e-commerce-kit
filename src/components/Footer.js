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
              <img src={footerLogo} alt="footer logo" />
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
                    <h3>{list.name}</h3>

                    {list.links.map((item, index) => {
                      return (
                        <li>
                          <a href="#home">{item}</a>
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
        <a href="#copyright"> Implemented by Alex On</a>
      </div>
    </div>
  );
}

export default Footer;
