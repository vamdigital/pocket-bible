import React from "react";

export const Prayer = () => {
  return (
    <div
      id="prayer"
      className="flex flex-col h-screen justify-center items-center"
    >
      <h1 className="text-3xl md:text-5xl text-center text-slate-600 uppercase mt-28 mb-8">A Prayer</h1>
      <p className="mt-2 mb-2">
        ...I ask the God of our Lord Jesus Christ the glorious Father, to give you the Spirit, who will make you wise and reveal God to you,
        so that you will know him. I ask that your minds may be opened to see his light, so that you will know what is the hope to which he has called you,
        how rich are the wonderful blessings he promises his people, and how very great is his power at work in us who believe (Ephesians - 1:17-19)
      </p>

      <p className="mt-2 mb-2">
        Jesus said...
        <em>&apos;Peace is what I leave with you; it is my own peace that I give you.&lsquo; (John 14:27)</em>
      </p>
      <em className="mt-2 mb-2">
        &apos;In the beginning the Word already existed;
        the Word was with God, and the Word was
        with God. From the very beginning the Word was with God.
        Through him God made all things&lsquo; (John - 1:1-3)
      </em>
      <div className="flex flex-col justify-center items-center mt-8">
        <a href="#home" className="text-xl text-blue-500 border-b border-blue-300">Back to Beginning</a>
      </div>
    </div>
  );
}
