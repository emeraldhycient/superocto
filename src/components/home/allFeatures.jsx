import React from "react";

function AllFeatures() {
  return (
    <section id="allFeatures" className="allFeatures col-md-9 mx-auto">
      <center>
        <h1
          style={{ fontWeight: "bolder", fontSize: 30 }}
          className="text-dark mb-5"
        >
          All Features
        </h1>
      </center>
      <section className="container">
        <div className="row">
          <div className="col-md-3 p-2 mb-4">
            <div className="d-flex  mb-3">
              <div className="px-2">
                <i className="fa fa-phone fa-2x text-info"></i>
              </div>
              <h5>Calls</h5>
            </div>
            <p>
              All incoming and outgoing calls with timestamps, duration, and
              caller info
            </p>
          </div>
          <div className="col-md-3 p-2 mb-4">
            <div className=" d-flex  mb-3">
              <div className="px-2">
                <i className="fa fa-location-dot fa-2x text-info"></i>
              </div>
              <h5>Gps</h5>
            </div>
            <p>Current location on the map, routes, and visited places</p>
          </div>{" "}
          <div className="col-md-3 p-2 mb-4">
            <div className=" d-flex  mb-3">
              <div className="px-2">
                <i className="fa fa-instagram fa-2x text-info"></i>
              </div>
              <h5>Social Apps</h5>
            </div>
            <p>Facebook, Instagram, Tinder, etc.</p>
          </div>{" "}
          <div className="col-md-3 p-2 mb-4">
            <div className=" d-flex  mb-3">
              <div className="px-2">
                <i className="fa fa-whatsapp fa-2x text-info"></i>
              </div>
              <h5>Messengers</h5>
            </div>
            <p>
              Whatsapp, Snapchat, iMessage, Skype, Telegram, Viber, Hangout,
              Line, etc.
            </p>
          </div>{" "}
          <div className="col-md-3 p-2 mb-4">
            <div className=" d-flex  mb-3">
              <div className="px-2">
                <i className="fa fa-chrome fa-2x text-info"></i>
              </div>
              <h5>Browser History</h5>
            </div>
            <p>
              All web browser history and activities with timestamps and
              bookmarks
            </p>
          </div>{" "}
          <div className="col-md-3 p-2 mb-4">
            <div className="d-flex  mb-3">
              <div className="px-2">
                <i className="fa fa-image fa-2x text-info"></i>
              </div>
              <h5>Photos and Videos</h5>
            </div>
            <p>
              All media that is shared, received, downloaded, or stored on the
              device
            </p>
          </div>{" "}
          <div className="col-md-3 p-2 mb-4">
            <div className=" d-flex  mb-3">
              <div className="px-2">
                <i className="fa fa-dashboard fa-2x text-info"></i>
              </div>
              <h5>Other activity</h5>
            </div>
            <p>
              Contacts, Calendar, Emails, Installed Apps, Wi-Fi networks, and
              more.
            </p>
          </div>{" "}
          <div className="col-md-3 p-2 mb-4">
            <div className=" d-flex  mb-3">
              <div className="px-2">
                <i className="fa fa-message fa-2x text-info"></i>
              </div>
              <h5>Sms</h5>
            </div>
            <p>
              All sent, received or deleted texts with timestamps and contact
              info
            </p>
          </div>{" "}
        </div>
      </section>
      <center>
        <div className="col-md-7">
          <button className="btn btn-info  btn-lg col-md-7 col-9 m-2">
            <a
              href="/prices"
              className="text-light  text-decoration-none text-uppercase"
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

export default AllFeatures;
