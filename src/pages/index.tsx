import type { NextPage } from "next";
import Head from "next/head";
import { Posts } from "../components/Posts";
import { UserAvatar } from "../components/UserAvatar";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const userSession = trpc.useQuery(["auth.getSession"]);

  const user = trpc.useQuery(["auth.getCurrentUser"]);

  const renderAuthpart = () => {
    if (userSession.data === null) {
      return (
        <div className="flex justify-end items-center gap-3">
          To be cool try to{" "}
          <a
            className="hover:scale-105 cursor-pointer duration-500 justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 w-24 p-2"
            href="/api/auth/signin"
          >
            login
          </a>
        </div>
      );
    } else {
      return user.data ? (
        <div className="flex justify-end items-center">
          <UserAvatar user={user.data} />
        </div>
      ) : (
        <div className="flex justify-end items-center">
          <p>Loading..</p>
        </div>
      );
    }
  };
  return (
    <>
      <Head>
        <title>H</title>
        <meta
          name="description"
          content="Hello. I'm having fun with create-t3-app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen min-h-screen flex flex-col justify-start items-center p-4 overflow-y-scroll bg-stone-50	">
        <main className="prose  max-w-none mx-auto">
          {renderAuthpart()}
          <h2 className="text-[3rem] lg:text-[5rem] md:text-[5rem] font-extrabold text-gray-700 my-2">
            <span className="text-purple-300">Hello there!</span>
            <span className="leading-snug">👋🏾</span>
          </h2>
          <div className="flex gap-3 items-center ">
            <p className="text-sm m-0 text-gray-700">This stack uses</p>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer"
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              NextJS
            </a>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer"
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              TypeScript
            </a>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
            >
              TailwindCSS
            </a>
            <a
              className="text-sm text-violet-500 underline decoration-dotted underline-offset-2 cursor-pointer"
              href="https://trpc.io/"
              target="_blank"
              rel="noreferrer"
            >
              tRPC
            </a>
          </div>
          <Posts />
        </main>
      </div>
    </>
  );
};

export default Home;
