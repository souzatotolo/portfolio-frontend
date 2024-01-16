import React from 'react';
import { GoTriangleRight } from 'react-icons/go';

export const About = () => {
  return (
    <div className="bg-white">
      <div className="shapedividers_com-7495 h-48 mt-20" />
      <div className="h-[70vh] bg-white flex items-center  mt-10 justify-center">
        <div className="h-[517px] max-w-[1400px] px-20 flex flex-row gap-5 items-start justify-center">
          <div className="bg-black w-[469px] h-[469px]"></div>
          <div className="h-full w-full px-20 display gap-6 flex flex-col text-black">
            <h1 className="font-bold text-[40px] text-[#181885]">About me</h1>
            <p className="text-[#3B3B3B]">
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
            <p className="font-bold text-[30px] text-[#181885]">Skills</p>
            <div className="grid grid-cols-2 gap-4 auto-rows-fr">
              <div className="flex flex-row items-center">
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
              <button className="col-span-2 w-44 h-8 text-sm rounded-full bg-[#9b77ff] text-zinc-50 hover:bg-[#583e9e] border-2 border-[#9B77FF]">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="shapedividers_com-9814 h-44" />
    </div>
  );
};
