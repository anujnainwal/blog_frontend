import React from "react";
import { Button, Col, Row, Typography, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import "./assets/css/register.css";
import BgImage from "../../assets/images/common.png";
const Register = () => {
  const { Title } = Typography;

  return (
    <Row className="loginContainer">
      <Col xs={24} sm={24} md={12} lg={12} className="leftPanel">
        <div className="topHeader">
          <NavLink to="/">
            <Button className="border-none bg-slate-600 m-5 text-white">
              Home
            </Button>
          </NavLink>
        </div>
        <section className="login__container">
          <Title level={2} style={{ color: "#fff", textAlign: "center" }}>
            Register
          </Title>
          <p className="text-sm text-center text-white">
            Register into your account for full access
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
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label={<span className="text-white me-1">Firstname</span>}
              name="firstname"
              rules={[
                {
                  type: "text",
                  required: true,
                  message: "Please input your firstname!",
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label={<span className="text-white me-1">Lastname</span>}
              name="lastname"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your Lastname!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<span className="text-white me-1">Email</span>}
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your email!",
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
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <div className="text-center ">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-100 mt-2 bg-blue-500"
              >
                Register
              </Button>
            </div>
            <p className="text-sm text-center mt-2 text-white ">
              Already have an Account?
              <NavLink to="/login" className="text-amber-400">
                Login
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

export default Register;
