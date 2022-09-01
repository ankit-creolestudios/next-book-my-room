import { Button, PageHeader } from "antd";
import moment from "moment";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="container site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          title={<Link href={"/"}>Noyo Room</Link>}
          extra={[
            <Link key="1" href={"/login"}>
              <Button type="primary" danger>
                Login
              </Button>
            </Link>,
          ]}
        />
      </div>
    </>
    // <nav className="navbar row justify-content-center sticky-top">
    //   <div className="container">
    //     <div className="col-6 p-0">
    //       <Link href={"/"}>
    //         <h3>Noyo Room</h3>
    //       </Link>
    //     </div>
    //     <div className="col-3 mt-3 mt-md-0 text-center">
    //       <Link href={"/login"}>
    //         <a className="btn btn-danger px-4 float-right"> Login</a>
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Header;
