import React from "react";
import { Book } from "../../data";

interface Props {
  Books: Book[];
}

export const Contents = ({ Books }: Props) => {
  const oldTestamentBooks = Books.filter((book) => book.testament === "Old");
  const newTestamentBooks = Books.filter((book) => book.testament === "New");
  return (
    <div
      id="home"
      className="flex flex-col min-h-screen justify-start items-flex-start"
    >
      <h1 className="text-3xl md:text-5xl text-center text-slate-600 uppercase mt-28 mb-8">
        Books of Bible
      </h1>
      <div className="flex justify-evenly w-full">
        <div className="flex flex-col md:w-[40%]">
          <h2 className="text-xl md:text-2xl underline underline-offset-2 mb-4 md:mb-8">
            Old Testament
          </h2>
          <div className="flex flex-col md:flex-wrap md:h-[750px] gap-2">
            {oldTestamentBooks.map(({ id, bookName }) => {
              return (
                <div key={id}>
                  <a
                    href={`#${id}`}
                    className="text-md p-1 flex border-b border-blue-300"
                  >
                    {bookName}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col md:w-[40%]">
          <h2 className="text-xl md:text-2xl underline underline-offset-2 mb-4 md:mb-8">
            New Testament
          </h2>
          <div className="flex flex-col md:flex-wrap md:h-[750px] gap-2">
            {newTestamentBooks.map(({ id, bookName }) => {
              return (
                <div key={id}>
                  <a
                    href={`#${id}`}
                    className="text-md p-1 flex border-b border-blue-300"
                  >
                    {bookName}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
