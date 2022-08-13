import React from "react";
import { Book } from "../../data";

interface Props {
  Books: Book[];
}

export const BibleBooks = ({ Books }: Props) => {
  const lastIdx = Books.length - 1;
  return (
    <div>
      {Books.map(({ id, bookName, bookScripture, bookGist }, index) => {
        return (
          <div
            key={id}
            id={`${id}`}
            className="flex flex-col h-screen justify-center items-start"
          >
            <h2 className="text-3xl border-b border-slate-500 text-slate-600 mb-4">
              {bookName}
            </h2>
            <p className="text-slate-500">{bookGist}</p>
            {bookScripture.map(({ chapter, verse }) => {
              return (
                <React.Fragment key={verse}>
                  <em>{verse}</em>
                  <p>{chapter}</p>
                </React.Fragment>
              );
            })}

            <div className="flex justify-evenly mt-4 mb-4 items-center w-full">
              {index !== 0 && (
                <a
                  href={`#${id - 1}`}
                  className="px-4 py-2 bg-slate-300 text-slate-500 hover:bg-slate-500 hover:text-slate-300 transition-all delay-75"
                >
                  {Books[id - 2]?.bookName}
                </a>
              )}
              {index >= 0 && lastIdx !== index && (
                <a
                  href={`#${id + 1}`}
                  className="px-4 py-2 bg-slate-300 text-slate-500 hover:bg-slate-500 hover:text-slate-300 transition-all delay-75"
                >
                  {Books[id]?.bookName}
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
