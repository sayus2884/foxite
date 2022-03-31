import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

import Logo from "../../public/logo.svg";

import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface ToolbarHeaderProps extends ToolbarProps {
  className?: string;
  onToggleDrawer?: () => void;
}

const ProfileToolbar: React.FC<ToolbarHeaderProps> = ({ className, onToggleDrawer, ...props }) => {
  return (
    <Toolbar className={`${className} flex items-center justify-between px-3`}>
      <div className="flex w-full h-full font-bold items-center gap-1">
        <SvgIcon
          className="h-[35px] w-[35px]"
          color="primary"
          viewBox="0 0 132.292 132.292"
          component={Logo}
        />

        <span className="text-2xl font-bold tracking-wider">FOXITE</span>
      </div>

      <IconButton onClick={onToggleDrawer} className="flex">
        <ChevronLeftIcon />
      </IconButton>
    </Toolbar>
  );
};

export default ProfileToolbar;
