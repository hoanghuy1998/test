import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DefaultLayout = () => {
  return (
    <div className="page-top">
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Routes>
            {/*<!-- Footer --> */}
            <Footer />
            {/* <!-- End of Footer --> */}
          </div>
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
    </div>
  );
};

export default DefaultLayout;
