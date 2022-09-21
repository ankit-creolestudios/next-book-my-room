import { InboxOutlined } from "@ant-design/icons";
import { Form, Input, Radio, Select, Upload } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { newRoom } from "../../redux/feature/roomSlice";
import UploadDrager from "../FormConfrol/UploadDrager";
import ButtonLoader from "../Layout/ButtonLoader";
const { TextArea } = Input;

const { Option } = Select;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const NewAndUpdateRoomForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rooms);
  const { loading, success, error } = state;
  const [image, setImage] = useState([]);
  const router = useRouter();

  const [imagePreview, setImagePreview] = useState([]);

  useEffect(() => {
    if (error) {
      toast.error("something wrong");
    }
    if (success) {
      router.push("/admin/rooms");
    }
  }, []);
  // const handleChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   setImage([]);
  //   setImagePreview([]);
  //   files.forEach((file) => {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setImage((oldArray) => [...oldArray, reader.result]);
  //         setImagePreview((oldArray) => [...oldArray, reader.result]);
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   });
  // };
  const handleSubmit = (values) => {
    dispatch(
      newRoom({
        address: values.address,
        airConditioned: values.airConditioned,
        breakfast: values.breakfast,
        category: values.category,
        description: values.description,
        guestCapacity: values.guestCapacity,
        internet: values.internet,
        name: values.name,
        numOfBeds: values.numOfBeds,
        petsAllowed: values.petsAllowed,
        price: values.price,
        roomCleaning: values.roomCleaing,
        images: values.room_image,
      })
    );
  };

  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-8">
          <div className="shadow-lg">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
              autoComplete="off"
            >
              <h1 className="mb-4 text-center">New Room</h1>
              <hr style={{ width: "249px" }} />
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter room title" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: "Please enter room price" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please enter room description",
                  },
                ]}
              >
                <TextArea rows={6} />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please enter room address" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Category"
                name="category"
                rules={[
                  { required: true, message: "Please enter room category" },
                ]}
              >
                <Select
                  style={{
                    width: 338,
                  }}
                >
                  {["King", "Single", "Twins"].map((category) => (
                    <Option key={category} value={category}>
                      {category}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Guest Capacity"
                name="guestCapacity"
                rules={[
                  { required: true, message: "Please select guest capacity" },
                ]}
              >
                <Select
                  defaultValue="lucy"
                  style={{
                    width: 338,
                  }}
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <Option key={num} value={num}>
                      {num}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Number of Beds"
                name="numOfBeds"
                rules={[
                  { required: true, message: "Please select number of bed" },
                ]}
              >
                <Select
                  style={{
                    width: 338,
                  }}
                >
                  {[1, 2, 3].map((category) => (
                    <Option key={category} value={category}>
                      {category}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <label className="mb-3">Room Features</label>
              <Form.Item
                label=" Internet"
                name="internet"
                rules={[
                  {
                    required: true,
                    message: "Please select internet availbility",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio.Button value={true}>Yes</Radio.Button>
                  <Radio.Button value={false}>No</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Breakfast"
                name="breakfast"
                rules={[
                  {
                    required: true,
                    message: "Please select breakfast availbility",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio.Button value={true}>Yes</Radio.Button>
                  <Radio.Button value={false}>No</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Radio.Group>
                  <Radio.Button value={true}>Yes</Radio.Button>
                  <Radio.Button value={false}>No</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Air Conditioned"
                name="airConditioned"
                rules={[
                  {
                    required: true,
                    message: "Please select air conditioned availbility",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio.Button value={true}>Yes</Radio.Button>
                  <Radio.Button value={false}>No</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Pets Allowed"
                name="petsAllowed"
                rules={[
                  { required: true, message: "Please select pet allowed" },
                ]}
              >
                <Radio.Group>
                  <Radio.Button value={true}>Yes</Radio.Button>
                  <Radio.Button value={false}>No</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Room Cleaning"
                name="roomCleaning"
                rules={[
                  { required: true, message: "Please select room cleaning" },
                ]}
              >
                <Radio.Group>
                  <Radio.Button value={true}>Yes</Radio.Button>
                  <Radio.Button value={false}>No</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Room Images">
                <Form.Item
                  name="room_image"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                >
                  <Upload.Dragger name="files">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
              <button type="submit" className="btn btn-block new-room-btn py-3">
                CREATE
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAndUpdateRoomForm;
