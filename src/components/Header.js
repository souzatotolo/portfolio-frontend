'use strict';
import React from 'react';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as nextLink } from 'next/link';

export const Header = () => {
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
        <Link to={'/about#about'} className="text-zinc-50  z-30" href="">
          About
        </Link>
        <Link to="/projects#projects" className="text-zinc-50  z-30" href="">
          Projects
        </Link>
        <Link to="/projects#getInTouch" className="text-zinc-50 z-30" href="">
          Contact
        </Link>

        <nextLink href="/resume.pdf">
          <button className=" text-[#9B77FF] text-lg  w-32 h-9 border-2  border-[#9B77FF] bg-transparent hover:bg-[#583e9e]  rounded-full">
            <a href="/resume.pdf" target="_blank" download>
              Resume
            </a>
          </button>
        </nextLink>
      </nav>
    </div>
  );
};
