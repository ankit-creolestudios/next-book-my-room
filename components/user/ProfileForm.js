import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import ButtonLoader from "../Layout/ButtonLoader";
import { Button, Form, Input } from "antd";
import UploadFile from "../FormControls/UploadFile";
const ProfileForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (values) => {
    // console.log(values);
    // e.preventDefault();
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 10000);
  };
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
              onFinish={handleSubmit}
              autoComplete="off"
            >
              {" "}
              <h1 className="mb-3">Profile</h1>
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
              <Form.Item label="Password" name="avatar">
                <UploadFile />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
