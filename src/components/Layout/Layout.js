import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../../utils/scrolltotop";
import Cursor from "../../utils/Cursor";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Cursor /> */}
      <ScrollToTop>
        <Header />
        {children}
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default Layout;
