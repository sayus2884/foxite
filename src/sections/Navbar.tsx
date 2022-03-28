import React, { useState, useEffect } from "react";
import Link from "next/link";

import SvgIcon from "@mui/material/SvgIcon";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { PropTypes } from "@mui/material";

import { routes } from "@bin/constants";

import Logo from "../../public/logo.svg";

const OBSERVE_SCROLL_HEIGHT = 80;

const Navbar: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className }) => {
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
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <SvgIcon
                className="h-[35px] w-[35px]"
                color={logoColor}
                viewBox="0 0 132.292 132.292"
                component={Logo}
              />
              <span className="uppercase text-2xl font-bold">Foxite</span>
            </div>
          </Link>

          <IconButton
            className="sm:hidden justify-self-end"
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer">
            <MenuIcon />
          </IconButton>

          <div className="hidden sm:flex justify-self-end gap-5 items-center">
            <nav>
              <ul className="flex gap-10">
                {routes.map(({ name, route }, i) => (
                  <li key={i}>
                    <Link href={route}>{name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
