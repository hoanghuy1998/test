import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogService from "../services/blogService";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const loadData = () => {
    blogService.getBlogs().then((res) => {
      setBlogs(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="row" id="table-hover-row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <div className="buttons">
                <Link to="addproduct" className="btn btn-primary ">
                  Add
                </Link>
              </div>
            </div>
            <div className="card-content">
              {/* <!-- table hover --> */}
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Stt</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Image</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((blog, idx) => (
                      <tr className="text-justify">
                        <td className="text-bold-500">{idx + 1}</td>
                        <td className="text-bold-500">{blog.title}</td>
                        <td>dsff $</td>
                        <td className="text-bold-500">
                          <img
                            src={blog.srcImg}
                            alt="Girl in a jacket"
                            width="90"
                            height="90"
                          />
                        </td>
                        <td className="text-center">
                          <Link to="/blog/editproduct" className="me-1">
                            <i className="far fa-edit"></i>
                          </Link>
                          <a href="/#">
                            <i className="fas fa-trash-alt text-danger"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
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

export default Blogs;
