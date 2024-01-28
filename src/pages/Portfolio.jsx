import Head from "next/head";
import React from "react";
import Layout from "@/components/layout";
import AnimatedText from "@/components/animatedText";
import { headerData } from "@/components/data";
import FileList from "@/components/FileNames";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>{headerData[0].portfolio.title}</title>
        <meta name="description" content={headerData[0].portfolio.desc} />
      </Head>

      <main className="w-full mt-0 h-screen flex flex-col items-center justify-evenly">
        <Layout className="pt-2 ">
          <AnimatedText text="Imagination Trumps Knowledge!" />
          {/* <div className="flex items-center justify-center"> */}
          <div className=" ">
            <FileList />
            {/* </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Portfolio;
