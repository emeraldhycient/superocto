import React from "react";
import "../styles.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <h2 style={{ fontWeight: "700" }} className="text-light mb-4">
              Phone Monitoring App for Parental Control
            </h2>
            <p className="text-light mb-4">
              Protect your kids from cyberbullying, online predators,
              inappropriate & violent content, and other online dangers. Keep an
              eye on all of your partner's phone activities wherever you are!
            </p>
            <div className="flex " id="dontshow">
              <button className="btn btn-info btn-lg col-md-6 col-9 m-2">
                <a
                  href="/prices"
                  className="text-light text-decoration-none text-uppercase"
                  style={{ fontWeight: "700" }}
                >
                  Try Now
                </a>
              </button>
              <div>
                <i
                  className="fa fa-apple fa-1x text-muted"
                  style={{ fontSize: 22, marginRight: "5px" }}
                ></i>
                <i
                  className="fa fa-android fa-1x text-muted"
                  style={{ fontSize: 22 }}
                ></i>
              </div>
              <p className="text-muted m-2">compatibile</p>
            </div>
          </div>
          <div className="col-md-6">
            <ul className="hero_list">
              <li>
                <i className="fa fa-check-circle text-info"></i>
                <h5 className="m-2 text-light">
                  All sent, received, or deleted messages
                </h5>
              </li>
              <li>
                <i className="fa fa-check-circle text-info"></i>
                <h5 className="m-2 text-light">Incoming and outgoing calls</h5>
              </li>
              <li>
                <i className="fa fa-check-circle text-info"></i>
                <h5 className="m-2 text-light">GPS location & routes</h5>
              </li>
              <li>
                <i className="fa fa-check-circle text-info"></i>
                <h5 className="m-2 text-light">
                  Whatsapp, Snapchat, Instagram, FB, etc
                </h5>
              </li>
              <li>
                <i className="fa fa-check-circle text-info"></i>
                <h5 className="m-2 text-light">
                  On any iPhone, iPad, or Android device
                </h5>
              </li>
            </ul>
            <div className=" d-md-none d-lg-none d-sm-block">
              <center>
                <button className="btn btn-info btn-lg col-10 m-2">
                  <a href="/prices" className="text-light text-decoration-none">
                    Try Now
                  </a>
                </button>
                <div>
                  <i
                    className="fa fa-apple fa-1x text-muted"
                    style={{ fontSize: 22, marginRight: "5px" }}
                  ></i>
                  <i
                    className="fa fa-android fa-1x text-muted"
                    style={{ fontSize: 22 }}
                  ></i>
                </div>
                <p className="text-muted m-2">compatibile</p>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
