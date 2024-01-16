import React from 'react';
import Image from 'next/image';
import { FaAngleDown, FaLinkedinIn } from 'react-icons/fa';
import { TbMail } from 'react-icons/tb';
import { FiGithub, FiInstagram } from 'react-icons/fi';

export const Introduction = () => {
  return (
    <div className="flex flex-col items-center justify-around overflow-hidden ">
      <div className="bg-[#0A2144] flex mb-26 z-10  overflow-hidden flex-col justify-center items-center py-8 ">
        <Image
          src="/Blob.svg"
          alt="Blob Image"
          width={1400}
          height={1200}
          objectFit="cover"
          className="blur blob absolute ml-28 z-[1]"
        />
        <div className="flex items-center mt-40 justify-center z-[5] flex-col">
          <p className="text-4xl font-extralight text-zinc-50 ">Hello I'm</p>
          <p className="text-[84px] text-[#9B77FF] font-bold">Richard Totolo</p>
          <p className="text-4xl font-extralight text-zinc-50 ">
            Front-end developer
          </p>
          <div className="flex mt-5 text-zinc-50 flex-row font-light text-1xl gap-5">
            <a href="">
              <TbMail size={30} className="hover:text-[#9B77FF]" />
            </a>
            <a href="">
              <FiGithub size={30} className="hover:text-[#9B77FF]" />
            </a>
            <a href="">
              <FaLinkedinIn size={30} className="hover:text-[#9B77FF]" />
            </a>
            <a href="">
              <FiInstagram size={30} className="hover:text-[#9B77FF]" />
            </a>
          </div>
        </div>
      </div>
      <a className="text-zinc-50 mt-20  z-20 flex" href="">
        <FaAngleDown size={30} />
      </a>
    </div>
  );
};
