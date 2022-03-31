import React, { useState } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import SideNavbar from "@components/SideNavbar";
import { PagesListItems } from "@components/NavListItems";

import ToolbarHeader from "@sections/ToolbarHeader";
import Navbar from "@sections/Navbar";
import Footer from "@sections/Footer";

const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex bg-gray-200">
        <SideNavbar isOpen={open} onClose={handleToggleDrawer}>
          <div className={`w-full sm:w-[300px] overflow-hidden h-screen flex flex-col`}>
            <ToolbarHeader
              className="border-b border-neutral-200"
              onToggleDrawer={handleToggleDrawer}
            />
            <Box className={`relative grow`}>
              <div className="absolute scrollbar inset-0 min-w-max w-full sm:w-[300px] lg:w-full">
                <PagesListItems />
              </div>
            </Box>

            <Divider />
          </div>
        </SideNavbar>

        <div className="flex flex-col flex-auto min-h-screen min-w-0 relative z-10">
          <Navbar className="shadow" openDrawer={open} onToggleDrawer={handleToggleDrawer} />

          <div className="flex flex-col h-full flex-grow">
            {/* Main Content */}
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
