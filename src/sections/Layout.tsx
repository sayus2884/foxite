import React from "react";

import Navbar from "@sections/Navbar";
import Footer from "@sections/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col flex-auto min-h-screen min-w-0 relative z-10 bg-gray-200">
      <Navbar className="shadow" />

      <div className="flex flex-col h-full flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
