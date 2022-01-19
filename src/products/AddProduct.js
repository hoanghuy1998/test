import React from "react";

const AddProduct = () => {
  return (
    <>
      <div className="row match-height">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Multiple Column</h4>
            </div>
            <div className="card-content">
              <div className="card-body">
                <form className="form">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label for="first-name-column">First Name</label>
                        <input
                          type="text"
                          id="first-name-column"
                          className="form-control"
                          placeholder="First Name"
                          name="fname-column"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label for="last-name-column">Last Name</label>
                        <input
                          type="text"
                          id="last-name-column"
                          className="form-control"
                          placeholder="Last Name"
                          name="lname-column"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label for="city-column">City</label>
                        <input
                          type="text"
                          id="city-column"
                          className="form-control"
                          placeholder="City"
                          name="city-column"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label for="country-floating">Country</label>
                        <input
                          type="text"
                          id="country-floating"
                          className="form-control"
                          name="country-floating"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label for="company-column">Company</label>
                        <input
                          type="text"
                          id="company-column"
                          className="form-control"
                          name="company-column"
                          placeholder="Company"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label for="email-id-column">Email</label>
                        <input
                          type="email"
                          id="email-id-column"
                          className="form-control"
                          name="email-id-column"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label for="formFile" className="form-label">
                          Default file input example
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                        ></input>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-end">
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
