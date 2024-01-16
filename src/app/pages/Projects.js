import React from 'react';
import { FiGithub, FiInstagram } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbMail } from 'react-icons/tb';

export const Projects = () => {
  return (
    <div className="h-full w-full m-10 flex items-center justify-start flex-col gap-20">
      <h1 className="font-bold text-[40px] text-[#9B77FF]">My Projects</h1>

      <div className="w-[1170px] h-[337px] flex flex-row gap-5">
        <img src="" className="w-[670px] h-[337px]" alt="" />
        <div className="flex w-[470px] h-[232px] flex-col gap-3">
          <p className="font-bold text-[30px] text-[#9B77FF]">VanHike</p>
          <p className="font-bold font-normal text-[#9B77FF]">
            2023 - Frontend & Backend
          </p>
          <div className="w-5 border-b-2 border-black" />
          <p className="text-zinc-50">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
          <p className="font-bold font-normal text-[#9B77FF]">
            React | NodeJS | Redux | MongoDB
          </p>
          <div className="flex flex-row gap-3">
            <a href="">
              {' '}
              <FiGithub
                size={30}
                color="#fff"
                className="hover:text-[#9B77FF]"
              />
            </a>
            <a href="">
              {' '}
              <HiOutlineExternalLink
                size={30}
                color="#fff"
                className="hover:text-[#9B77FF]"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="w-[1170px] h-[337px] flex flex-row gap-5">
        <div className="flex w-[470px] h-[232px] flex-col gap-3">
          <p className="font-bold text-[30px] text-[#9B77FF]">VanHike</p>
          <p className="font-bold font-normal text-[#9B77FF]">
            2023 - Frontend & Backend
          </p>
          <div className="w-5 border-b-2 border-black" />
          <p className="text-zinc-50">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
          <p className="font-bold font-normal text-[#9B77FF]">
            React | NodeJS | Redux | MongoDB
          </p>
          <div className="flex flex-row gap-3">
            <a href="">
              {' '}
              <FiGithub
                size={30}
                color="#fff"
                className="hover:text-[#9B77FF]"
              />
            </a>
            <a href="">
              {' '}
              <HiOutlineExternalLink
                size={30}
                color="#fff"
                className="hover:text-[#9B77FF]"
              />
            </a>
          </div>
        </div>
        <img src="" className="w-[670px] h-[337px]" alt="" />
      </div>

      <div className="w-[1170px] h-[337px] flex flex-row gap-5">
        <img src="" className="w-[670px] h-[337px]" alt="" />
        <div className="flex w-[470px] h-[232px] flex-col gap-3">
          <p className="font-bold text-[30px] text-[#9B77FF]">VanHike</p>
          <p className="font-bold font-normal text-[#9B77FF]">
            2023 - Frontend & Backend
          </p>
          <div className="w-5 border-b-2 border-black" />
          <p className="text-zinc-50">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
          <p className="font-bold font-normal text-[#9B77FF]">
            React | NodeJS | Redux | MongoDB
          </p>
          <div className="flex flex-row gap-3">
            <a href="">
              {' '}
              <FiGithub
                size={30}
                color="#fff"
                className="hover:text-[#9B77FF]"
              />
            </a>
            <a href="">
              {' '}
              <HiOutlineExternalLink
                size={30}
                color="#fff"
                className="hover:text-[#9B77FF]"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="font-bold text-[40px] text-[#9B77FF]">Get in touch</p>
      <p className="text-white w-[570px] text-center">
        Thank you for taking the time to visit my portfolio! If you have any
        questions, feedback, or project inquiries, please feel free to reach out
        to me. I am always excited to connect with new people and discuss how I
        can help bring their vision to life. Looking forward to hearing from you
        soon!
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
      <p className="text-[#9B77FF] py-10">Developed by Richard Totolo</p>
    </div>
  );
};
