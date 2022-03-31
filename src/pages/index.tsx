import type { NextPage } from "next";
import { HTMLAttributes } from "react";

interface ResourceCardProps extends HTMLAttributes<HTMLElement> {
  title: string;
  url: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ children, title, url }) => {
  return (
    <a
      href={url}
      target="blank"
      rel="noopener"
      className="grid auto-rows-max gap-3 md:gap-5 p-8 items-center border border-neutral-400 rounded transition-colors hover:border-foxite hover:text-foxite min-h-[230px]">
      <h2 className="text-2xl font-bold uppercase">{title}</h2>
      {children}
    </a>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <section className="section-px pb-10 pt-5 md:pt-20 flex flex-col items-center center gap-5">
        <h1 className="uppercase text-6xl md:text-7xl max-w-[22ch] tracking">
          <span className="text-2xl lg:text-3xl tracking-normal">The React Boilerplate to</span>
          <br />
          Build & Deploy Fast
        </h1>
        <p className="max-w-[56ch] md:text-xl lg:text-2xl lg:font-light">
          Leverage features such as SEO, customizeable components, intuitive designing and more from{" "}
          <span className="font-bold">Next JS</span>, <span className="font-bold">MUI</span>, and{" "}
          <span className="font-bold">Tailwind CSS</span>.
        </p>
      </section>

      <section className="section-px flex flex-col gap-10 py-5 md:py-20 justify-center lg:max-w-[1000px] lg:mx-auto">
        <p className="md:text-xl">
          You can start developing by editing{" "}
          <span className="font-bold">./src/pages/index.tsx</span>. Or check out these useful
          resources and documentations:
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          <ResourceCard
            title="New to Web Development?"
            url="https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website">
            <p>Learn to create a web app from Javascript to React to Next JS.</p>
          </ResourceCard>

          <ResourceCard
            title="Master CSS, Master Tailwind CSS"
            url="https://www.youtube.com/channel/UCJZv4d5rbIKd4QHMPkcABCw">
            <p>
              Check out Kevin Powell&apos;s Youtube channel and learn CSS concepts, tips, and
              tricks.
            </p>
          </ResourceCard>

          <ResourceCard
            title="Explore Tailwind CSS"
            url="https://tailwindcss.com/docs/utility-first">
            <p>Ready to get started with Tailwind CSS? Check out how to use it.</p>
          </ResourceCard>

          <ResourceCard title="Explore MUI" url="https://mui.com/getting-started/usage/">
            <p>Start adding and customizing components with Material UI.</p>
          </ResourceCard>
          <ResourceCard
            title="React Typescript Cheat Sheet"
            url="https://react-typescript-cheatsheet.netlify.app/">
            <p>
              Confused on how to use Typescript with React? Here&apos;s a cheat sheet on how to use
              it in your project.
            </p>
          </ResourceCard>
        </div>
      </section>
    </>
  );
};

export default Home;
