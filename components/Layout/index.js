import React from "react";
import Footer from "./Footer";
import Header from "./Header/Index";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="page">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
