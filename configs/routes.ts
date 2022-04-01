import SvgIcon from "@mui/material/SvgIcon/SvgIcon";

import HomeIcon from "@mui/icons-material/Home";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import ScienceIcon from "@mui/icons-material/Science";

export interface RouteProps {
  name: string;
  route: string;
  isNested?: boolean;
  icon?: typeof SvgIcon;
  routes?: RouteProps[];
}

const pages: RouteProps[] = [
  { name: "Home", route: "/", icon: HomeIcon },
  { name: "Page 1", route: "/page1", icon: RoomServiceIcon },
  { name: "Page 2", route: "/page2", icon: ScienceIcon },
];

export const routes = { pages };
