import React from "react";
import { Book } from "../../data";

interface Props {
  Books: Book[];
}

export const BibleBooks = ({ Books }: Props) => {
  const lastIdx = Books.length - 1;
  return (
    <div>
      {Books.map(
        ({ id, bookName, bookScripture, bookGist, bookUrl }, index) => {
          return (
            <div
              key={id}
              id={`${id}`}
              className="flex flex-col min-h-screen justify-center items-start"
            >
              <h2 className="text-3xl text-slate-600 mt-6 md:mt-0 mb-4">{bookName}</h2>
              <p className="text-slate-500 mb-4">{bookGist}</p>
              <ul>
                {bookScripture.map(({ chapter, verse }) => {
                  return (
                    <li key={verse} className="flex flex-col mt-2">
                      <div className="mb-2 text-slate-600">
                        {" "}
                        <em> {verse}</em>{" "}
                        <span className="text-blue-500 text-md ">
                          [{chapter}]{" "}
                        </span>{" "}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <a
                href={bookUrl}
                target="_blank"
                className="mb-6 text-slate-400 mt-4 border-b border-blue-400"
                rel="noreferrer"
              >
                Read More
              </a>
              <div></div>
              <div className="flex justify-evenly mt-4 mb-4 items-center w-full">
                {index !== 0 && (
                  <a
                    href={`#${id - 1}`}
                    className="px-4 py-2 bg-slate-500 text-slate-300 hover:bg-slate-300 hover:text-slate-500 transition-all delay-75"
                  >
                    {Books[id - 2]?.bookName}
                  </a>
                )}
                {index >= 0 && lastIdx !== index && (
                  <a
                    href={`#${id + 1}`}
                    className="px-4 py-2 bg-slate-500 text-slate-300 hover:bg-slate-300 hover:text-slate-500 transition-all delay-75"
                  >
                    {Books[id]?.bookName}
                  </a>
                )}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
