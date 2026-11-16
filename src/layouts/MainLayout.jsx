import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const MainLayout = ({ children }) => (
  <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#0f1d3d] bg-[linear-gradient(90deg,rgba(3,5,12,.52),rgba(7,11,25,.34)_55%,rgba(3,5,12,.5)),radial-gradient(ellipse_at_52%_42%,rgba(29,78,216,.32),transparent_54%),linear-gradient(135deg,#07111f_0%,#0f1d3d_47%,#07111f_100%)] font-['Merriweather',Georgia,serif] text-white">
    <NavBar />
    {children}
    <Footer />
  </div>
);

export default MainLayout;
