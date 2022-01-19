import React from "react";

const Adduser = () => {
  return (
    <>
      <div className="col-md-6 col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Add user</h4>
          </div>
          <div className="card-content">
            <div className="card-body">
              <form className="form form-horizontal">
                <div className="form-body">
                  <div className="row">
                    <div className="col-md-4">
                      <label>First Name</label>
                    </div>
                    <div className="col-md-8 form-group">
                      <input
                        type="text"
                        id="first-name"
                        className="form-control"
                        name="fname"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-4">
                      <label>Email</label>
                    </div>
                    <div className="col-md-8 form-group">
                      <input
                        type="email"
                        id="email-id"
                        className="form-control"
                        name="email-id"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-4">
                      <label>Mobile</label>
                    </div>
                    <div className="col-md-8 form-group">
                      <input
                        type="number"
                        id="contact-info"
                        className="form-control"
                        name="contact"
                        placeholder="Mobile"
                      />
                    </div>
                    <div className="col-md-4">
                      <label>Password</label>
                    </div>
                    <div className="col-md-8 form-group">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="col-sm-12 d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn btn-primary me-1 mb-1"
                      >
                        Save
                      </button>
                      <button
                        type="reset"
                        className="btn btn-light-secondary me-1 mb-1"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adduser;
