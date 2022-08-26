import React from "react";
import Footer from "./Footer";
import Header from "./Header/Index";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
