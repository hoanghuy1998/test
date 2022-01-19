import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="row match-height">
        <div className="col-md-6 col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Horizontal Form</h4>
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

        <div className="col-12 col-md-6 col-12">
          <div className="card">
            <div className="card-content">
              {/* <!-- Table with no outer spacing --> */}
              <div className="table-responsive">
                <table className="table mb-0 table-lg">
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>RATE</th>
                      <th>SKILL</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-bold-500">Michael Right</td>
                      <td>$15/hr</td>
                      <td className="text-bold-500">UI/UX</td>
                      <td className="text-center">
                        <Link to="/editcategory" className="me-2">
                          <i className="far fa-edit"></i>
                        </Link>
                        <a href="/#">
                          <i className="fas fa-trash-alt text-danger"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-bold-500">Morgan Vanblum</td>
                      <td>$13/hr</td>
                      <td className="text-bold-500">Graphic concepts</td>
                      <td className="text-center">
                        <Link to="/editcategory" className="me-2">
                          <i className="far fa-edit"></i>
                        </Link>
                        <a href="/#">
                          <i className="fas fa-trash-alt text-danger"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-bold-500">Tiffani Blogz</td>
                      <td>$15/hr</td>
                      <td className="text-bold-500">Animation</td>
                      <td className="text-center">
                        <Link to="/editcategory" className="me-2">
                          <i className="far fa-edit"></i>
                        </Link>
                        <a href="/#">
                          <i className="fas fa-trash-alt text-danger"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-bold-500">Ashley Boul</td>
                      <td>$15/hr</td>
                      <td className="text-bold-500">Animation</td>
                      <td className="text-center">
                        <Link to="/editcategory" className="me-2">
                          <i className="far fa-edit"></i>
                        </Link>
                        <a href="/#">
                          <i className="fas fa-trash-alt text-danger"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-bold-500">Mikkey Mice</td>
                      <td>$15/hr</td>
                      <td className="text-bold-500">Animation</td>
                      <td className="text-center">
                        <Link to="/editcategory" className="me-2">
                          <i className="far fa-edit"></i>
                        </Link>
                        <a href="/#">
                          <i className="fas fa-trash-alt text-danger"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
