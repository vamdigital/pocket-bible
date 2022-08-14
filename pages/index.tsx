import type { NextPage } from "next";
import Head from "next/head";
import { BibleBooks } from "../components/Books";
import { Contents } from "../components/Contents";
import { Prayer } from "../components/Prayer";
import { Turn } from "../components/Turn";
import { Books } from "../data";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pocket Bible</title>
        <meta
          name="description"
          content="Pocket Bible - Bible Reference on the go.."
        />
        <meta property="og:title" content="Pocket Bible" key="Pocket Bible" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <header className="fixed z-10 bg-white w-full py-2 flex justify-between items-center left-0 right-0 px-4">
          <div>
            <h1 className="text-3xl text-slate-800 m-0">
              <a href="#home">Pocket Bible</a>
            </h1>
            <em className="flex text-slate-400 text-xs">
              Selected Verses from Good News Bible
            </em>
          </div>
          <div className="flex gap-3">
            <a
              href="#home"
              title="Back to Book List"
              className="text-sm underline-offset-2 underline text-slate-400"
            >
              Contents
            </a>
            <a
              href="#turn"
              title="Back to Book List"
              className="text-sm underline-offset-2 underline text-slate-400"
            >
              Turn to
            </a>
          </div>
        </header>
        {/* This would a component that gets rendered in the loop of books */}
        <div>
          <Contents Books={Books} />
          <BibleBooks Books={Books} />
          <Turn />
          <Prayer />
        </div>
      </main>
    </div>
  );
};

export default Home;
