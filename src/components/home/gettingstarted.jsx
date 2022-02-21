import React from "react";

function Gettingstarted() {
  return (
    <section id="gettingstarted" className="mt-5 pt-5 col-md-9 mx-auto">
      <center>
        <h1 style={{ fontWeight: "800", fontSize: 25 }} className="text-dark">
          3 Easy Steps to Start
        </h1>
        <hr className="text-light" />
      </center>
      <section className="container">
        <div className="row">
          <div className="col-md-4 Steps">
            <div className="circle_holder">
              <div className="circle">
                <h3 className="text-info">1</h3>
              </div>
              <div className="line"></div>
            </div>
            <div className="">
              <h5 className="text-info my-3">
                <strong>Buy Croxspy </strong>
              </h5>
              <p>
                Select one of the subscriptions and fill out the order form.
                Complete your payment and check your email for installation
                instructions.
              </p>
            </div>
          </div>
          <div className="col-md-4 Steps">
            <div className="circle_holder">
              <div className="circle">
                <h3 className="text-info">2</h3>
              </div>
              <div className="line"></div>
            </div>
            <div className="">
              <h5 className="text-info my-3">
                <strong>Install and Set Up </strong>
              </h5>
              <p>
                Download the app and install it on the device. *Please note: To
                access Premium features, you need to root the target Android
                device.
              </p>
            </div>
          </div>
          <div className="col-md-4 Steps">
            <div className="circle_holder">
              <div className="circle">
                <h3 className="text-info">3</h3>
              </div>
              <div className="line"></div>
            </div>
            <div className="">
              <h5 className="text-info my-3">
                <strong>View the Information </strong>
              </h5>
              <p>
                Log in to your personal Control Panel to view all the activities
                on the device.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Gettingstarted;
