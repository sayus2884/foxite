import SvgIcon from "@mui/material/SvgIcon/SvgIcon";

import HomeIcon from "@mui/icons-material/Home";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ScienceIcon from "@mui/icons-material/Science";

export interface RouteProps {
  name: string;
  route: string;
  isNested?: boolean;
  icon?: typeof SvgIcon;
  routes?: RouteProps[];
}

const pages: RouteProps[] = [
  { name: "Home", route: "/#", icon: HomeIcon },
  { name: "Services", route: "/#", icon: RoomServiceIcon },
  { name: "About", route: "/#", icon: HelpOutlineIcon },
  { name: "Contact", route: "/#", icon: LocalPhoneIcon },
  { name: "Test", route: "/test", icon: ScienceIcon },
];

export const routes = { pages };
