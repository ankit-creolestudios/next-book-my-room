import { EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const MyBooking = ({ id }) => {
  return (
    <div>
      MyBooking
      <div>
        <div className="container">
          <Link href={`/booking/6315e65e1523be678024fd68`}>
            <Button type="primary">
              Booking Detail <EyeOutlined />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
