import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/feature/userSlice";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const passwords = {
      password,
      confirmPassword,
    };
    if (password === confirmPassword) {
      dispatch(resetPassword({ token: router.query?.token, passwords }));
    }
  };
  const state = useSelector((state) => state.usersPv);
  console.log(state);
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
              onFinish={handleSubmit}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              {" "}
              <h1 className="mb-3">Reset Password</h1>
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
            {/* <form onSubmit={handleSubmit}>
            <div>
              <label>Password</label>
              <input
                type={"text"}
                value={password}
                placeholder={"Enter new password"}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                type={"text"}
                value={confirmPassword}
                placeholder={"Re-enter password"}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
