import Head from "next/head";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Me from "../Assets/profile/developer-pic-1.png";
import AnimatedText from "@/components/animatedText";
import { FaDownload } from "react-icons/fa";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import { headerData } from "@/components/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>{headerData[0].index.title}</title>
        <meta name="description" content={headerData[0].index.desc} />
      </Head>
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <Layout className="p-32 md:pt-16 sm:pt-32 z-0 ">
          <div className="flex items-center justify-between w-full lg:flex-col z-1">
            <div className="w-1/2  md:w-[85%] z-1 lg:pt-0 pl-12">
              <Image
                src={Me}
                alt="Basanta"
                className="w-[90%] h-auto
               md:inline-block md:w-full
              
              "
                priority
                sizes="(max-width:768px) 100vw,
              (max-width:1200px) 50vw,
              50vw"
              />
            </div>
            <div
              className="w-1/2 flex flex-col items-center self-center
            z-3 
            lg:w-full lg:text-center
            "
            >
              <h1> </h1>
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-5xl xl:!text-4xl lg:!text-center lg:!text-5xl 
                  md:!text-4xl sm:!text-3xl z-4
                "
              />
              <p className="my-4 text-base font-2xl z-5 text-justify  md:text-sm ">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center z-[-5]">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light lg:text-base md:p-2 md:px-4 md:text-base
                "
                  download={true}
                >
                  Resume
                  <FaDownload className="pl-2 text-3xl" />
                </Link>
                <Link
                  href="mailto:basbhai@live.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium text-capitalize text-dark underline dark:text-light
                  md:text-base
                  "
                >
                  Write Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div
          //   className="absolute right-8 bottom-8 inline-block w-24 md:hidden
          // lg:z-[-1]
          className="fixed right-4 bottom-4 flex items-center justify-center
        overflow-hidden lg:w-[5rem] md:w-[4rem] lg:z-[0]
        w-[6rem] lg:hidden
        "
        >
          <Image src={lightBulb} alt="basanta" className="w-full h-auto " />
        </div>
      </main>
    </>
  );
}
