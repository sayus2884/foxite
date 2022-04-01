import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const SideNavbar = dynamic(() => import("@components/SideNavbar"));
import { PagesListItems } from "@components/NavListItems";

import ToolbarHeader from "@sections/ToolbarHeader";
import Navbar from "@sections/Navbar";
import Footer from "@sections/Footer";

const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState<"temporary" | "permanent">("temporary");

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => setVariant("permanent"), []);

  return (
    <>
      <div className="flex bg-gray-200">
        <SideNavbar isOpen={open} onClose={handleToggleDrawer} width={300} variant={variant}>
          <div className="w-full sm:w-[300px] lg:w-full overflow-hidden h-screen flex flex-col">
            <ToolbarHeader
              className="border-b border-neutral-200"
              onToggleDrawer={handleToggleDrawer}
            />
            <Box className="relative grow">
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
