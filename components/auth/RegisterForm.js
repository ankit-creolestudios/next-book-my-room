import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import ButtonLoader from "../Layout/ButtonLoader";
import { Button, Form, Input } from "antd";
const RegisterForm = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 20000);
  // }, [loading]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRegister({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      avatar: "",
    });
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegister({ ...register, [name]: value });
  };
  console.log(register);
  return (
    <div className="container container-fluid">
      <div className="row wrapper register">
        <div className="col-12 col-lg-6">
          <div className="shadow-lg">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              {" "}
              <h1 className="mb-3">Register</h1>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone number"
                name="phone"
                rules={[{ required: true, message: "Please enter your email" }]}
                autoComplete="off"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <Input.Password autoComplete="off" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
          {/* <form className="shadow-lg" onSubmit={handleSubmit}>
            <h1 className="mb-3">Register</h1>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                id="name_field"
                name="name"
                className="form-control"
                value={register.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                id="email_field"
                name="email"
                className="form-control"
                value={register.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="phone"
                id="phone_field"
                name="phone"
                className="form-control"
                value={register.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                name="password"
                className="form-control"
                value={register.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password_field">Confirm Password</label>
              <input
                type="password"
                id="cpassword_field"
                name="cpassword"
                className="form-control"
                value={register.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Profile Image</label>
              <input
                type="file"
                id="avatar_field"
                name="avatar"
                className="form-control"
                value={register.avatar}
                onChange={handleChange}
              />
            </div>
            Already have account <Link href="/login">SignIn</Link>
            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading ? true : false}
            >
              Register
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
