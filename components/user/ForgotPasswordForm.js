import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../redux/feature/userSlice";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "") {
      dispatch(forgotPassword({ email }));
    }
  };

  const state = useSelector((state) => state.usersPv);
  console.log(state);
  return (
    <div className="container container-fluid">
      <div className="row wrapper forgot">
        <div className="col-10 col-lg-6">
          <div className="shadow-lg">
            <Form
              name="basic"
              // labelCol={{ span: 8 }}
              // wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
              autoComplete="off"
            >
              {" "}
              <h1 className="mb-3">Forgot Password</h1>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
                autoComplete="off"
              >
                <Input autoComplete="off" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
