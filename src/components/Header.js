'use strict';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
        <Link href="#about" className="text-zinc-50 hover:text-[#9b77ff]  z-30">
          About
        </Link>
        <Link
          href="#projects"
          className="text-zinc-50 hover:text-[#9b77ff] z-30"
        >
          Projects
        </Link>
        <Link
          href="#getInTouch"
          className="text-zinc-50 hover:text-[#9b77ff] z-30"
        >
          Contact
        </Link>

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
