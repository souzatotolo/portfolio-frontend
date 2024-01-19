import React from 'react';
import { GoTriangleRight } from 'react-icons/go';
import Link from 'next/link';

export const About = () => {
  return (
    <div className="bg-white md:block">
      <div className="shapedividers_com-7495 h-48 mt-20 " />
      <div className="md:h-[70vh] bg-white flex items-center h-screen justify-center">
        <div className="md:h-[517px] md:mb-20 md:mb-0 md:max-w-[1400px] md:px-20 px-10 flex flex-col md:flex-row gap-80 items-start justify-center">
          <div className="cards hidden md:block">
            <div className="one card "></div>
            <div className="two card  "></div>
            <div className="three card ">
              <img
                src="/richard.jpeg"
                alt=""
                className="h-full w-full rounded-md "
              />
            </div>
          </div>

          <div
            id="about"
            className=" about h-full w-full md:px-20 gap-6 flex flex-col justify-center items-center md:items-start text-black"
          >
            <h1 className="font-bold text-[40px] text-[#181885]">About me</h1>
            <img
              src="/richard.jpeg"
              alt=""
              className="h-full w-full rounded-md md:hidden"
            />
            <p className="text-[#3B3B3B] hidden md:block">
              My name is Richard and I have a passion for technology and
              problem-solving. I believe that the frontend is where the magic
              happens, and I take pride in creating responsive and user-friendly
              websites and applications. With years of experience in both
              backend and frontend development, I have honed my skills to create
              beautiful and functional designs. On this website, you'll find
              examples of my best works that showcase my creativity and
              technical abilities. Thank you for visiting, and please feel free
              to reach out to me with any questions or project inquiries.
            </p>
            <p className="md:hidden">
              My name is Richard and I have a passion for technology and
              problem-solving. I take pride in creating responsive and
              user-friendly websites and applications. With years of experience
              in both backend and frontend development I have honed my skills to
              create beautiful and functional designs.
            </p>
            <p className="font-bold text-[30px] text-[#181885]">Skills</p>
            <div className="grid grid-cols-2 gap-4 auto-rows-fr">
              <div className="flex flex-row items-center ">
                <GoTriangleRight size={28} color="#9b77ff" />
                <p>Javascript</p>
              </div>
              <div className="flex flex-row items-center">
                <GoTriangleRight size={28} color="#9b77ff" />
                <p>React</p>
              </div>
              <div className="flex flex-row items-center">
                <GoTriangleRight size={28} color="#9b77ff" />
                <p>NextJS</p>
              </div>
              <div className="flex flex-row items-center">
                <GoTriangleRight size={28} color="#9b77ff" />
                <p>NodeJs</p>
              </div>
              <div className="flex flex-row items-center">
                <GoTriangleRight size={28} color="#9b77ff" />
                <p>Express</p>
              </div>
              <div className="flex flex-row items-center">
                <GoTriangleRight size={28} color="#9b77ff" />
                <p>SQL | MongoDB</p>
              </div>
              <Link href="/resume.pdf" target="blank">
                <button className=" hidden md:block md:mt-1 md:ml-0 ml-5 md:w-44 w-[280px] h-8 text-sm rounded-full bg-[#9b77ff] text-zinc-50 hover:bg-[#fff] hover:text-[#9B77FF] border-2 border-[#9B77FF]">
                  <a href="/resume.pdf" download></a>Download Resume
                </button>
              </Link>
            </div>

            <button className=" md:hidden mt-8 w-48 h-10 text-md rounded-full bg-[#9b77ff] text-zinc-50 hover:bg-[#fff] hover:text-[#9B77FF] border-2 border-[#9B77FF]">
              <a href="/resume.pdf" target="_blank" download>
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="shapedividers_com-9814 h-44" />
    </div>
  );
};
