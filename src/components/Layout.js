import React from "react";

import "./layout.scss";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};
