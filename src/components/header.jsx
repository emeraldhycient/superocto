import React from "react";
import logo from "../images/c.png";
function Header() {
  const scrollToAnchor = (id) => {
    const anchor = document.querySelector(id);
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#000" }}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
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
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse offset-0 offset-md-1 offset-lg-1"
            id="navbarNavAltMarkup"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
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
                  className="nav-link active"
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
                  className="nav-link active"
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
                  className="nav-link active"
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
                  className="nav-link active"
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
                  className="nav-link active"
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
      </nav>
    </header>
  );
}

export default Header;
