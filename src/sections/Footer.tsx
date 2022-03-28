import React from "react";
import NextLink from "next/link";

import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { routes } from "@bin/constants";

import Logo from "../../public/logo.svg";

interface FooterNavProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  routes: { name: string; route: string }[];
}

const FooterNav: React.FC<FooterNavProps> = ({ title, routes, ...props }) => (
  <div {...props}>
    <h2 className="mb-5 text-xl tracking-wide">{title}</h2>
    <nav>
      <ul className="grid gap-6 font-light">
        {routes.map(({ name, route }, i) => (
          <li key={i}>
            <NextLink href={route} passHref>
              <Link color="inherit" underline="hover">
                {name}
              </Link>
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className, ...props }) => {
  return (
    <Box
      component="footer"
      color="primary.contrastText"
      className={`${className} bg-neutral-800`}
      {...props}>
      <div className="section-px py-10 lg:py-20 max-w-content grid sm:grid-cols-2 md:flex md:flex-row gap-10 md:gap-28 lg:gap-36">
        <div className="md:row-span-2 flex flex-col gap-3 max-w-[250px]">
          <NextLink href="/">
            <div className="flex cursor-pointer w-fit items-center hover:text-foxite">
              <SvgIcon
                className="h-[50px] w-[50px]"
                color="primary"
                viewBox="0 0 132.292 132.292"
                component={Logo}
              />
              <p className="uppercase font-bold text-4xl">Foxite</p>
            </div>
          </NextLink>
          <p className="font-light">The React boilerplate to build & deploy fast.</p>
        </div>

        <FooterNav className="md:row-span-2" title="Sitemap" routes={routes} />
      </div>

      <div className="bg-black/50 section-px py-5 text-sm tracking-wider font-light lg:text-center uppercase">
        Copyright &copy; Foxite 2022
      </div>
    </Box>
  );
};

export default Footer;
