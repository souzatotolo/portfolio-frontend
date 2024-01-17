import React from 'react';
import Image from 'next/image';
import { FaAngleDown, FaLinkedinIn } from 'react-icons/fa';
import { TbMail } from 'react-icons/tb';
import { FiGithub, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Introduction = () => {
  return (
    <div className="flex flex-col items-center md:justify-around justify-center overflow-hidden ">
      <div className="bg-[#0A2144] flex mb-26 z-10 flex-col justify-center items-center py-8 ">
        <motion.div
          className="hidden md:block h-80 w-80 bloob bg-gradient-to-r from-purple-800 to-pink-500 Z-4 blur absolute rounded-lg"
          animate={{
            scale: [1, 1.4, 2, 1.8, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['0%', '40%', '22%', '50%', '0%'],
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        ></motion.div>
        <motion.div
          className=" md:hidden h-80 w-80 bloob bg-gradient-to-r from-purple-800 to-pink-500 Z-4 blur absolute rounded-lg"
          animate={{
            scale: [0.4, 1, 1.1, 0.8, 0.4],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['12%', '40%', '22%', '50%', '7%'],
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        ></motion.div>
        {/* <Image
          src="/Blob.svg"
          alt="Blob Image"
          width={1400}
          height={1200}
          objectFit="cover"
          className="blur hidden md:block blob absolute ml-28 z-[1]"
        />{' '}
        <Image
          src="/Blob.svg"
          alt="Blob Image"
          width={500}
          height={200}
          objectFit="cover"
          className="blur md:hidden absolute z-[1]"
        /> */}
        <div className="flex items-center mt-40 justify-center z-[5] flex-col">
          <p className="text-3xl md:text-4xl font-extralight text-zinc-50 ">
            Hello I'm
          </p>
          <p className=" md:text-[84px] text-5xl text-[#9B77FF] font-bold">
            Richard Totolo
          </p>
          <p className="text-3xl md:text-4xl font-extralight text-zinc-50 ">
            Front-end developer
          </p>
          <div className="flex mt-5 text-zinc-50 flex-row font-light text-1xl gap-5">
            <a href="mailto:totolo.richard@gmail.com">
              <TbMail size={30} className="hover:text-[#9B77FF]" />
            </a>
            <a href="https://github.com/souzatotolo">
              <FiGithub size={30} className="hover:text-[#9B77FF]" />
            </a>
            <a href="https://www.linkedin.com/in/richardtotolo/">
              <FaLinkedinIn size={30} className="hover:text-[#9B77FF]" />
            </a>
            <a href="https://www.instagram.com/richard.totolo/">
              <FiInstagram size={30} className="hover:text-[#9B77FF]" />
            </a>
          </div>
        </div>
      </div>
      <motion.a
        className="text-zinc-50 mt-20  z-20 flex"
        href=""
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <FaAngleDown size={30} />
      </motion.a>
    </div>
  );
};
