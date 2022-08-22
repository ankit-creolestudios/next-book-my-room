import React from "react";
import Header from "./Header/Index";

const Layout = ({ children }) => {
  return (
    <div>
      Layout
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
