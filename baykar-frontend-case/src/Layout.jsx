import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "../src/styles/Layout.scss";


const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Layout içerisine navbar footer eklenmiştir, değişecek içerik için children alanı tanımlanmıştır */}
      <div className="container-fluid px-0">
        <nav>
          <Navbar />
        </nav>
        <section>{children}</section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
