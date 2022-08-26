import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="navbar container">
      <div className="row">
        <Link href={"/"}>
          <div className="col-3">
            <img src="/images/logo.png" className="book-logo" />
          </div>
        </Link>
        <div className="col-3"></div>
      </div>
    </nav>
    // <nav class="navbar row justify-content-center sticky-top">
    //   <div class="container">
    //     <div class="col-3 p-0">
    //       <div class="navbar-brand">
    //         <img src="./images/bookit_logo.png" alt="BookIT" />
    //       </div>
    //     </div>

    //     <div class="col-3 mt-3 mt-md-0 text-center">
    //       <a class="btn btn-danger px-4 text-white login-header-btn float-right">
    //         Login
    //       </a>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Header;
