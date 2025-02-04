import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
// Adjust the path based on your folder structure

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
