import React from "react";
import Categories from "./category/Categories";
import EditCategory from "./category/EditCategory";
import Home from "./home/Home";
import AddProduct from "./products/AddProduct";
import EditProduct from "./products/EditProduct";
import Products from "./products/Products";
// import Adduser from "./users/Adduser";
// import Edituser from "./users/Edituser";
import Users from "./users/Users";
import Order from "./order/Order";
import Blogs from "./blogs/Blogs";

const routes = [
  { path: "", component: <Home /> },
  { path: "home", component: <Home /> },
  { path: "users", component: <Users /> },
  { path: "/users/:id", component: <Users /> },
  // { path: "categories", component: <Categories /> },
  // { path: "editcategory", component: <EditCategory /> },
  { path: "products", component: <Products /> },
  { path: "products/addproduct", component: <AddProduct /> },
  { path: "products/editproduct", component: <EditProduct /> },
  { path: "order", component: <Order /> },
  { path: "blogs", component: <Blogs /> },
];

export default routes;
