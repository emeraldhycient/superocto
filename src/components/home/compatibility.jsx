import { useState } from "react";

function Compatibility() {
  const [model, setmodel] = useState("");
  const [showmessage, setshowmessage] = useState(false);

  const checkmodel = (e) => {
    e.preventDefault();
    if (model.length > 5) {
      setTimeout(() => {
        setshowmessage(true);
      }, 1000);
    }
  };

  return (
    <section id="compatibility" className="bg-dark">
      <div className="col-md-6">
        <center>
          <h1 className="text-info mb-4" id="compaheader">
            <strong>Compatibility</strong>
          </h1>
        </center>
        <h4 className="text-light mb-4" id="subheader">
          Enter the model of the phone or tablet to check its compatibility
        </h4>
        <div className="card">
          <form onSubmit={(e) => checkmodel(e)}>
            <div className="d-flex">
              <input
                type="text"
                name=""
                id=""
                value={model}
                onChange={(e) => setmodel(e.target.value)}
                className="form-control border-0 shadow-none"
                required={true}
              />
              <button className="btn btn-light" type="submit">
                <i className="fa fa-search fa-2x border-0 shadow-none"></i>
              </button>
            </div>
          </form>
        </div>
        {showmessage ? (
          <div className="d-flex mt-2 align-items-center">
            <i className="fa fa-check-circle text-success"></i>
            <h5 className="text-light" id="compaq">
              Great! Your device is compatible.
            </h5>
          </div>
        ) : (
          ""
        )}
        <div className="d-flex justify-content-between mt-4">
          <div className="col-md-2 card d-block bg-dark p-2 border d-flex align-items-center justify-content-center">
            <i className="fa fa-apple text-muted"></i>
          </div>
          <div className="col-md-2 card d-block bg-dark p-2 border d-flex align-items-center justify-content-center">
            <i className="fa fa-android text-muted"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Compatibility;
