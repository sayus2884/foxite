import React, { useState, useEffect } from "react";
import Link from "next/link";

import { PropTypes } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";

import { routes } from "@configs/routes";

import Logo from "../../public/logo.svg";

interface BurgerNavProps extends IconButtonProps {
  openDrawer?: boolean;
}

const BurgerNav: React.FC<BurgerNavProps> = ({ className, openDrawer, onClick, ...props }) => {
  return (
    <IconButton
      className={`${className}`}
      onClick={onClick}
      sx={{
        ...(openDrawer && { display: "none" }),
      }}
      {...props}>
      <MenuIcon />
    </IconButton>
  );
};

interface Props {
  className?: string;
  openDrawer?: boolean;
  transparent?: boolean;
  onToggleDrawer: () => void;
}

const Navbar: React.FC<Props> = ({ className, onToggleDrawer, openDrawer }) => {
  const OBSERVE_SCROLL_HEIGHT = 80;

  const [barColor, setBarColor] = useState<PropTypes.Color | "transparent">("transparent");
  const [logoColor, setLogoColor] = useState<"primary" | "white">("primary");
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (clientWindowHeight < OBSERVE_SCROLL_HEIGHT) {
      setBarColor("transparent");
      setLogoColor("primary");
    } else {
      setBarColor("primary");
      setLogoColor("white");
    }
  }, [clientWindowHeight]);

  const showShadow = clientWindowHeight < OBSERVE_SCROLL_HEIGHT ? "shadow-none" : "shadow";

  return (
    <>
      <AppBar
        className={`${className} z-20 sticky top-0 transition-colors ${showShadow}`}
        color={barColor}>
        <Toolbar className="grid grid-flow-col auto-cols-fr items-center section-px">
          <div className="hidden md:flex items-center" onClick={onToggleDrawer}>
            <BurgerNav
              className="hover:bg-transparent"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              openDrawer={openDrawer}
            />
          </div>

          <Link href="/">
            <div className="justify-self-center flex items-center">
              <SvgIcon
                className="h-[35px] w-[35px] cursor-pointer"
                color={logoColor}
                viewBox="0 0 132.292 132.292"
                component={Logo}
              />
              <span className="uppercase text-2xl font-bold">Foxite</span>
            </div>
          </Link>

          <div className="hidden md:flex justify-self-end gap-5 items-center">
            <nav className="hidden lg:block">
              <ul className="flex gap-5">
                {routes.pages.map(({ name, route }) => (
                  <li key={name}>
                    <Link href={route}>{name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Toolbar>
      </AppBar>

      <BurgerNav
        className="md:hidden fixed bottom-0 right-0 m-5 bg-red-500 hover:bg-red-600 shadow z-50"
        size="large"
        color="white"
        edge="start"
        aria-label="open drawer"
        onClick={onToggleDrawer}
        openDrawer={openDrawer}
      />
    </>
  );
};

export default Navbar;
