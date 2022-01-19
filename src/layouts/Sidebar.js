import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <Link to="/home">
              <i className="fas fa-laugh-wink"></i>
            </Link>
          </div>
          <div className="sidebar-brand-text mx-3">
            Coza Store <sup>2</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <div className="nav-item">
          <Link className="nav-link" to="/users">
            <i className="fas fa-users"></i>
            <span>Users</span>
          </Link>
        </div>
        {/* <div className="nav-item">
          <Link className="nav-link" to="/categories">
            <i className="fas fa-fw fa-cog"></i>
            <span>Categories</span>
          </Link>
        </div> */}

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="products">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Products</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="order">
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            <span>Order</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="blogs">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Blogs</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Addons</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="/#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="login.html">
                Login
              </a>
              <a className="collapse-item" href="register.html">
                Register
              </a>
              <a className="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="404.html">
                404 Page
              </a>
              <a className="collapse-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </a>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>

        {/* <!-- Sidebar Message --> */}
        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src="img/undraw_rocket.svg"
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
    </>
  );
};

export default Sidebar;
