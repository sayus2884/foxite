import React, { useState, useEffect } from "react";

import Drawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";

interface DrawerProps extends MuiDrawerProps {
  isOpen?: boolean;
  width?: number;
}

const SideNavbar: React.FC<DrawerProps> = ({ children, isOpen, width = 300, ...props }) => {
  return (
    <Drawer
      className={`transition-[width] `}
      sx={{
        width: isOpen ? `${width}px` : "0",
      }}
      open={isOpen}
      variant="permanent"
      PaperProps={{
        classes: {
          root: `transition-transform transition-[width] duration-300 relative sticky h-screen overflow-hidden ${
            isOpen ? "shadow-sm" : "border-0"
          }`,
        },
      }}
      {...props}>
      {children}
    </Drawer>
  );
};

export default SideNavbar;
