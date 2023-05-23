import React from "react";
import { Button, Col, Row, Typography, Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./asset/css/login.css";
import BgImage from "../../assets/images/common.png";
import { loginUser } from "../../fetures/slices/user/userThunk";
import MessageResponse from "../../message/MessageResponse";

const Login = () => {
  const { Title } = Typography;
  let dispatch = useDispatch();
  let user = useSelector((state) => state.auth);
  let navigate = useNavigate();
  const onFinish = async (value) => {
    try {
      dispatch(loginUser(value));
      if (user.userInfo.status === 1) {
        MessageResponse({ type: "success", content: "Login success" });
        localStorage.setItem("userInfo", JSON.stringify(user.userInfo));
        localStorage.setItem(
          "accessToken",
          JSON.stringify(user.userInfo.accessToken)
        );
        navigate("/");
      }
    } catch (error) {
      return;
    }
  };
  return (
    <Row className="loginContainer">
      <Col xs={24} sm={24} md={12} lg={12} className="leftPanel">
        {user.loading === false &&
          user.error === true &&
          MessageResponse({ type: "error", content: "Invalid creedential" })}
        <div className="topHeader">
          <NavLink to="/">
            <Button className="border-none bg-slate-600 m-5 text-white">
              Home
            </Button>
          </NavLink>
        </div>
        <section className="login__container">
          <Title level={2} style={{ color: "#fff", textAlign: "center" }}>
            Sign In
          </Title>
          <p className="text-sm text-center text-white">
            Sign into your account for full access
          </p>
          <Form
            name="basic"
            labelCol={{
              span: 6,
            }}
            className="mt-3"
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label={<span className="text-white me-1">Email Address</span>}
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<span className="text-white me-1">Password</span>}
              name="password"
              rules={[
                {
                  required: true,
                  min: 8,
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <p className="text-sm text-right text-white me-10">
              <NavLink to="/forgetPassword" className="text-yellow-500">
                Forget Password?
              </NavLink>
            </p>

            <div className="text-center ">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-100 mt-2 bg-blue-500"
                disabled={user.loading ? true : false}
                loading={user.loading ? true : false}
              >
                Login
              </Button>
            </div>
            <p className="text-sm text-center mt-2 text-white ">
              Don't have Account?
              <NavLink to="/register" className="text-amber-400">
                Register
              </NavLink>
            </p>
          </Form>
        </section>
      </Col>
      <Col xs={0} md={12} lg={12} className="rightPanel">
        <img src={BgImage} alt="bgImage" />
      </Col>
    </Row>
  );
};

export default Login;
