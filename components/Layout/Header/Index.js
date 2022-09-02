import { Button, PageHeader } from "antd";
import moment from "moment";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../../redux/feature/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.usersPv?.user);
  useEffect(() => {
    if (!state?.user) {
      dispatch(currentUser());
    }
  }, [dispatch, state?.user]);
  console.log(state);

  const handleSignout = () => {
    signOut();
  };
  return (
    <>
      <div className="container site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          title={<Link href={"/"}>Noyo Room</Link>}
          extra={[
            <React.Fragment key="3">
              {state?.user ? (
                <div key={"2"} className="ml-4 dropdown d-line avtar">
                  <figure className="avatar avatar-nav">
                    <img
                      src={"/images/default_avatar.jpg"}
                      alt={state?.user && state?.user.name}
                      className="rounded-circle"
                      style={{ width: "50px" }}
                    />
                  </figure>
                  <span>{state?.user && state?.user.name}</span>
                  {/* <div>
                    <Link href={"/"} onClick={handleSignout}>
                      Logout
                    </Link>
                  </div> */}
                </div>
              ) : (
                <Link key="1" href={"/login"}>
                  <Button type="primary" danger>
                    Login
                  </Button>
                </Link>
              )}
            </React.Fragment>,
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
