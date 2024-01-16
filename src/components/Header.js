import React from 'react';

export const Header = () => {
  return (
    <div className="flex justify-between mx-24 my-2 h-8">
      <h1 className="text-[#9b77ff] text-2xl font-bold">Richard Totolo</h1>
      <nav className="md:flex gap-10 hidden px-10 items-center flex-wrap">
        <a className="text-zinc-50  z-30" href="">
          About
        </a>
        <a className="text-zinc-50  z-30" href="">
          Projects
        </a>
        <a className="text-zinc-50 z-30" href="">
          Contact
        </a>
        <button className=" text-[#9B77FF] text-lg  w-32 h-9 border-2  border-[#9B77FF] bg-transparent hover:bg-[#583e9e]  rounded-full">
          Resume
        </button>
      </nav>
    </div>
  );
};
