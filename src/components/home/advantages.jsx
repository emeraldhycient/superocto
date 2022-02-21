import React from "react";
import phonesetup from "../../images/phonesetup.png";
import eye from "../../images/eye.png";
import hourglass from "../../images/hourglass.png";
import serverimg from "../../images/serverimg.png";
import onlinesupport from "../../images/onlinesupport.png";
import tags from "../../images/tags.png";

function Advantages() {
  return (
    <section id="advantages">
      <center>
        <h1 style={{ fontWeight: "900", fontSize: 30 }} className="text-light">
          Advantages
        </h1>
        <hr className="text-light" />
      </center>
      <center>
        <div className="row container mt-5">
          <div className="col-md-1"></div>
          <div className="col-md-3 mb-4 d-flex align-items-center justify-content-between">
            <img src={phonesetup} height="55px" width="55px" alt="" />
            <div style={{ textAlign: "left", marginLeft: "10px" }}>
              <h6
                className="text-light"
                style={{ fontWeight: "700", fontSize: 15 }}
              >
                It takes up to 5 mi nutes to set up the app. No jailbreak or
                root required*
              </h6>
              <hr className="text-light d-md-none d-lg-none d-sm-flex" />
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex align-items-center justify-content-between">
            <img src={eye} height="55px" width="50px" alt="" />
            <div style={{ textAlign: "left", marginLeft: "10px" }}>
              <h6
                className="text-light"
                style={{ fontWeight: "700", fontSize: 15 }}
              >
                You will get alerted whenever a dangerous activity is taking
                place on the device.
              </h6>
              <hr className="text-light d-md-none d-lg-none d-sm-flex" />
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex align-items-center justify-content-between">
            <img src={hourglass} height="55px" width="55px" alt="" />
            <div style={{ textAlign: "left", marginLeft: "10px" }}>
              <h6
                className="text-light"
                style={{ fontWeight: "700", fontSize: 15 }}
              >
                Information about all activities on the device updates every 5
                min remotely
              </h6>
              <hr className="text-light d-md-none d-lg-none d-sm-flex" />
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3 mb-4 d-flex align-items-center justify-content-between">
            <img src={serverimg} height="55px" width="55px" alt="" />
            <div style={{ textAlign: "left", marginLeft: "10px" }}>
              <h6
                className="text-light"
                style={{ fontWeight: "700", fontSize: 15 }}
              >
                All information is securely stored and protected. Only you have
                access to it
              </h6>
              <hr className="text-light d-md-none d-lg-none d-sm-flex" />
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex align-items-center justify-content-between">
            <img src={onlinesupport} height="55px" width="55px" alt="" />
            <div style={{ textAlign: "left", marginLeft: "10px" }}>
              <h6
                className="text-light"
                style={{ fontWeight: "700", fontSize: 15 }}
              >
                24/7 free multi-lingual support. We are happy to help at any
                time
              </h6>
              <hr className="text-light d-md-none d-lg-none d-sm-flex" />
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex align-items-center justify-content-between">
            <img src={tags} height="55px" width="55px" alt="" />
            <div style={{ textAlign: "left", marginLeft: "10px" }}>
              <h6
                className="text-light"
                style={{ fontWeight: "700", fontSize: 15 }}
              >
                Budget-friendly app. The price is less than $1 per day!
              </h6>
              <hr className="text-light d-md-none d-lg-none d-sm-flex" />
            </div>
          </div>
        </div>
      </center>
      <center>
        <div className="col-md-5">
          <button className="btn btn-light  btn-lg col-md-7 col-9 m-2">
            <a
              href="/prices"
              className="text-info  text-decoration-none text-uppercase"
              style={{ fontWeight: "700" }}
            >
              Try Now
            </a>
          </button>
        </div>
      </center>
    </section>
  );
}

export default Advantages;
