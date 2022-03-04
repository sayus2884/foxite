import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <h1 className="title">
        Welcome to{" "}
        <a className="text-blue-500" href="https://nextjs.org">
          Next.js
        </a>{" "}
        +{" "}
        <a className="text-blue-500" href="https://tailwindcss.com/">
          TailwindCSS!
        </a>
      </h1>

      <p>
        Get started by editing <code>src/pages/index.tsx</code> or{" "}
        <code>src/styles/globals.css</code>
      </p>

      <div className="grid md:grid-cols-2 w-full items-ceter justify-center max-w-[800px]">
        <a href="https://nextjs.org/docs" className="card">
          <h2>NextJs Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://tailwindcss.com/docs/installation" className="card">
          <h2>TailwindCSS Documentation &rarr;</h2>
          <p>Find in-depth information about TailwindCSS features and plugins.</p>
        </a>

        <a href="https://nextjs.org/learn" className="card">
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a href="https://github.com/vercel/next.js/tree/canary/examples" className="card">
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="card">
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </>
  );
};

export default Home;
