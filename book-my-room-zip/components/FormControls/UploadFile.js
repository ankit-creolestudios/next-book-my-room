import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import React, { useState } from "react";

const UploadFile = ({ props, name, value }) => {
  const [fileList, setFileList] = useState([]);
  //   const [avatar, setAvatar] = useState("");
  //   const [avtarPreview, setAvatarPreview] = useState(
  //     "/images/default_avatar.jpg"
  //   );
  const [previewImage, setPreviewImage] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);
  const onChange = (profile) => {
    if (profile.file.status === "uploading") {
      setLoading(true);
      return;
    }

    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setImageUrl(url);
    });
  };

  const handlePreview = (file) => {
    // console.log(file);
    // setPreviewImage(file.thumbUrl);
    setPreviewVisible(true);
  };
  return (
    <div>
      UploadFile
      <div>
        {/* <Upload {...props} maxCount={maxCount} fileList={fileList}>
          <Button icon={<UploadOutlined />}>Upload</Button>
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Upload> */}
      </div>
    </div>
  );
};

export default UploadFile;
