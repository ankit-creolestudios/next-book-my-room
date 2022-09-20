import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import ButtonLoader from "../Layout/ButtonLoader";
import { Button, Form, Input } from "antd";
const LoginForm = () => {
  const session = useSession();
  // const [login, setLogin] = useState({ email: "", password: "" });
  // const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onFinish = async (values) => {
    const signinUser = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });
    if (!signinUser?.error) {
      router.push("/");
    }
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("failed", errorInfo);
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const signinUser = await signIn("credentials", {
  //     redirect: false,
  //     email: login.email,
  //     password: login.password,
  //   });
  //   console.log(signinUser);
  // };
  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setLogin({ ...login, [name]: value });
  // };
  // console.log(login);
  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <div className="shadow-lg">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              {" "}
              <h1 className="mb-3">Login</h1>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
                autoComplete="off"
              >
                <Input autoComplete="off" />
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
              <div className="mb-4">
                <Link href="/password/forgot-password">Forgot Password?</Link>
              </div>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
              <div className="py-1 mt-3 text-center">
                <Link href="/register">New User?</Link>
              </div>
            </Form>
          </div>
          {/* <form className="shadow-lg" onSubmit={handleSubmit}>
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                name="email"
                className="form-control"
                value={login.email}
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
                value={login.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Link href="/password/forgot">Forgot Password?</Link>
            </div>

            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading ? true : false}
            >
              LOGIN
            </button>
            <div className="py-1 mt-3 text-center">
              <Link href="/register">New User?</Link>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
