import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../../utils/scrolltotop";

const Layout = ({ children }) => {
  return (
    <div>
      <ScrollToTop>
        <Header />
        {children}
        <Footer />
      </ScrollToTop>
    </div>
  );
};

export default Layout;
