/** @format */

import React from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header/Index";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='page'>
        <ToastContainer position='top-right' />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
