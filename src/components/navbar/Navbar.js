import React, { useState } from "react";
import { Drawer, Layout, Switch } from "antd";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./asset/css/style.css";
let { Header } = Layout;

const Navbar = () => {
  let [showDrawer, setShowDrawer] = useState(false);
  return (
    <React.Fragment>
      <Layout>
        <Header className="bg-white d-flex justify-center align-middle overflow-hidden">
          <div
            className="logo flex content-center justify-between items-center "
            style={{ height: "inherit" }}
          >
            <NavLink to={"/"} className="flex content-center items-center ">
              <div className="flex content-center items-center ">
                <span className="text-base mx-2 navbar_custom hover:textc">
                  Blogs
                </span>
              </div>
            </NavLink>
            <div>
              <AiOutlineMenu
                cursor="pointer"
                className="handburger"
                fontSize={20}
                onClick={() => setShowDrawer(true)}
              />
              {showDrawer && (
                <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
                  <ul className="flex flex-col">
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
                    <li>
                      <Switch
                        // checkedChildren={<CheckOutlined />}
                        // unCheckedChildren={<CloseOutlined />}
                        defaultChecked
                      />
                    </li>
                  </ul>
                </Drawer>
              )}

              <ul className="flex right_navbar">
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
                <li>
                  <Switch
                    // checkedChildren={<CheckOutlined />}
                    // unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />
                </li>
              </ul>
            </div>
          </div>
        </Header>
      </Layout>
    </React.Fragment>
  );
};

export default Navbar;
