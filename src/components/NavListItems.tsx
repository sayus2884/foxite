import React, { useState } from "react";
import Link from "next/link";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ListItem, SvgIconProps } from "@mui/material";

import { routes, RouteProps } from "@configs/routes";

interface CollapseableListProps {
  Icon?: React.ComponentType<SvgIconProps>;
  primary: string;
}

const renderNavItem = (route: RouteProps) => {
  const Icon = route.icon;

  if (route.isNested) {
    return (
      <CollapseableList Icon={Icon} primary={route.name} key={route.name}>
        <List>
          {route.routes &&
            route.routes.map((route) => (
              <ListItem disablePadding key={route.name}>
                <ListItemButton>
                  <Link href={route.route}>
                    <ListItemText inset primary={route.name} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </CollapseableList>
    );
  }

  return (
    <ListItemButton key={route.name}>
      {Icon && (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}

      <Link href={route.route}>
        <ListItemText primary={route.name} />
      </Link>
    </ListItemButton>
  );
};

const CollapseableList: React.FC<CollapseableListProps> = ({ children, Icon, primary }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        {Icon && (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        )}

        <ListItemText primary={primary} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  );
};

export const PagesListItems = () => {
  return (
    <List
      className="w-full sm:max-w-[360px] bg-white"
      component="nav"
      aria-labelledby="pages-nav-list"
      subheader={
        <ListSubheader className="font-bold" component="div" id="pages-nav-list">
          Pages
        </ListSubheader>
      }>
      {routes.pages.map((route) => {
        return renderNavItem(route);
      })}
    </List>
  );
};
