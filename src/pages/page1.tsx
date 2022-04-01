import { HTMLAttributes, ReactElement } from "react";
import Layout from "@sections/Layout";

import { NextPageWithLayout } from "@types";

const Test: NextPageWithLayout = () => {
  return (
    <>
      <section className="section-px pb-10 pt-5 md:pt-20 flex flex-col items-center center gap-5">
        <h1 className="uppercase text-6xl md:text-7xl max-w-[22ch] tracking">Page 1</h1>
      </section>
    </>
  );
};

Test.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Test;
