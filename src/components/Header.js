'use strict';
import React from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const resumeLink = '/resume.pdf';
  const openResume = () => {
    window.open(resumeLink, '_blank');
  };
  return (
    <div className="flex items-start justify-end md:justify-between md:mx-24 md:my-2 h-8">
      <motion.h1
        whileHover={{ opacity: 0.8 }}
        whileTap={{ scale: 0.8 }}
        className="text-[#9b77ff] text-xl mr-8 md:text-2xl font-bold"
      >
        Richard Totolo
      </motion.h1>
      <nav className="md:flex gap-10 hidden px-10 items-center flex-wrap">
        <a to="" className="text-zinc-50  z-30" href="">
          About
        </a>
        <a to="" className="text-zinc-50  z-30" href="">
          Projects
        </a>
        <a to="" className="text-zinc-50 z-30" href="">
          Contact
        </a>

        <button
          onClick={openResume}
          className=" text-[#9B77FF] text-lg  w-32 h-9 border-2  border-[#9B77FF] bg-transparent hover:bg-[#583e9e]  rounded-full"
        >
          Resume
        </button>
      </nav>
    </div>
  );
};
