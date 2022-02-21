import React from "react";
import "./styles.css";
import logo from "../images/c.png";

function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  const scrollToAnchor = (id) => {
    const anchor = document.querySelector(id);
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <footer>
      <div id="footer">
        <div className="con">
          <div className="container">
            <div className="row m-auto">
              <div className="col-md-4 mt-4">
                <a
                  className="navbar-brand d-flex align-items-center text-info"
                  href="/"
                >
                  <img
                    src={logo}
                    style={{
                      width: "60px",
                      margin: 0,
                      padding: 0,
                      marginRight: "-20px",
                    }}
                    alt=""
                  />
                  <h3>roxspy</h3>
                </a>
                <a href="https://api.whatsapp.com/send?phone=19733064297&text=payment%20subscription%20for">
                  <i className="fa fa-whatsapp  text-light"> Whatsapp</i>
                </a>
                <br />
                <a href="tel:+19733064297" className="text-light">
                  <i className="fa fa-phone text-light mr-2"> </i>
                  <h6>+19733064297</h6>
                </a>
                <a href="mailto:Hubhack20@gmail.com" className="text-light">
                  <i className="fa fa-envelope text-light mr-2"></i>
                  <h6>Hubhack20@gmail.com </h6>
                </a>
              </div>
              <div className="col-md-4 mt-4">
                <h4 className="text-light">
                  <b>QUICK LINKS</b>
                </h4>
                <div className="mt-4">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active text-info"
                        aria-current="page"
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToAnchor("#advantages");
                        }}
                      >
                        ADVANTAGES
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active text-info"
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToAnchor("#allFeatures");
                        }}
                      >
                        FEATURES
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active text-info"
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToAnchor("#compatibility");
                        }}
                      >
                        COMPATIBILITY
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active text-info"
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToAnchor("#gettingstarted");
                        }}
                      >
                        STEPS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active text-info"
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToAnchor("#requirements");
                        }}
                      >
                        REQUIREMENTS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active text-info"
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToAnchor("#faq");
                        }}
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <h4 className="text-light">
                  <b>GET IN TOUCH</b>
                </h4>
                <div className="d-flex mt-4">
                  <div className="circle mr-2">
                    <i className="fa fa-facebook fa-2x text-light"></i>
                  </div>
                  <div className="circle mr-2">
                    <a href="https://api.whatsapp.com/send?phone=19733064297&text=payment%20subscription%20for">
                      <i className="fa fa-whatsapp fa-2x text-light"></i>
                    </a>
                  </div>
                  <div className="circle mr-2">
                    <i className="fa fa-instagram fa-2x text-light"></i>
                  </div>
                  <div className="circle mr-2">
                    <i className="fa fa-twitter fa-2x text-light"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-part text-center pt-3">
        <h5>
          <b className="text-light mr-2">&copy; Croxspy</b>
          <span className="text-muted ml-2">{year}</span>
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
