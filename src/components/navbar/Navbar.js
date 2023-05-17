import React from "react";
import { Layout, Switch } from "antd";

import { NavLink } from "react-router-dom";
import './asset/css/style.css'
let { Header } = Layout;

const Navbar = () => {
  return (
    <React.Fragment>
      <Layout>
        <Header className="bg-white d-flex justify-center align-middle overflow-hidden">
          <div className="logo flex content-center justify-between ">
            <NavLink to={"/"} className="flex content-center items-center ">
              <div className="flex content-center items-center ">
                <span className="text-base mx-2 navbar_custom hover:textc">Blogs</span>
              </div>
            </NavLink>
            <div>
              <ul className="flex md:flex-col sm:flex-col xs:flex-col">
                <li className="me-5">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="me-5">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="me-5">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="me-5">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="me-5">
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li><Switch
      // checkedChildren={<CheckOutlined />}
      // unCheckedChildren={<CloseOutlined />}
      defaultChecked
    /></li>
              </ul>
            </div>
          </div>
        </Header>
        hr
      </Layout>
    </React.Fragment>
  );
};

export default Navbar;
