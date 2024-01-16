import React from 'react';
import { FiGithub, FiInstagram } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbMail } from 'react-icons/tb';

export const Projects = () => {
  return (
    <div className="h-full px-5 flex items-center justify-start flex-col gap-60 md:gap-20">
      <h1 className="font-bold text-[40px] text-[#9B77FF] mt-20">
        My Projects
      </h1>

      <div className="md:w-[1170px] w-full h-[337px] flex md:flex-row flex-col gap-5">
        <img src="/vanhike.png" className="md:w-[670px] h-[337px]" alt="" />
        <div className="flex md:w-[470px] h-[232px] flex-col gap-3">
          <p className="font-bold text-[30px] text-[#9B77FF]">VanHike</p>
          <p className="font-bold font-normal text-[#9B77FF]">
            2023 - Frontend & Backend
          </p>
          <div className="w-5 border-b-2 border-[#9B77FF]" />
          <p className="text-zinc-50">
            VanHike, a single-page application, was developed as part of a
            Computer Science Information Systems (CSIS) course. The website
            caters to hiking enthusiasts, providing them with a user-friendly
            platform to explore and search for their favorite trails.
          </p>
          <p className="font-bold font-normal text-[#9B77FF]">
            React | NodeJS | Express | MongoDB
          </p>
          <div className="flex flex-row gap-3">
            <a href="https://github.com/souzatotolo/VanHike">
              {' '}
              <FiGithub
                size={30}
                color="#fff"
                className="hover:text-[#9B77FF]"
              />
            </a>
            <a href="https://project-group5.vercel.app/">
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

      <div className="md:w-[1170px] h-[337px] flex flex-col md:flex-row gap-6">
        <img
          src="/magnolia.png"
          className=" md:hidden md:w-[670px] w-screen h-[337px]"
          alt=""
        />
        <div className="flex md:w-[470px] h-[232px] flex-col gap-3">
          <p className="font-bold text-[30px] text-[#9B77FF]">
            Magnolia Janitorial Services
          </p>
          <p className="font-bold font-normal text-[#9B77FF]">
            2024 - Frontend
          </p>
          <div className="w-5 border-b-2 border-[#9B77FF]" />
          <p className="text-zinc-50">
            Magnolia Janitorial Services was a professional project for a
            cleaning company.The website showcases services, pricing, and forms
            for clients to request quotes. It's integrated with WhatsApp for
            easy communication but it has a company email integration with the
            forms.
          </p>
          <p className="font-bold font-normal text-[#9B77FF]">
            React | NextJs | TailwindCSS
          </p>
          <div className="flex flex-row gap-3">
            <a href="https://github.com/souzatotolo/magnoliajan-frontend">
              {' '}
              <FiGithub
                size={30}
                color="#fff"
                className="hover:text-[#9B77FF]"
              />
            </a>
            <a href="https://www.magnoliajanitorialservices.com/">
              {' '}
              <HiOutlineExternalLink
                size={30}
                color="#fff"
                className="hover:text-[#9B77FF]"
              />
            </a>
          </div>
        </div>
        <img
          src="/magnolia.png"
          className=" hidden md:block md:w-[670px] w-screen h-[337px]"
          alt=""
        />
      </div>

      <div className="md:w-[1170px] w-full h-[337px] flex md:flex-row flex-col gap-5">
        <img
          src="/somnium.png"
          className="md:w-[670px] w-screen h-[337px]"
          alt=""
        />
        <div className="flex md:w-[470px] h-[232px] flex-col gap-3">
          <p className="font-bold text-[30px] text-[#9B77FF]">
            SOMNIUM - ERP system{' '}
          </p>
          <p className="font-bold font-normal text-[#9B77FF]">
            2023 - Frontend & Backend
          </p>
          <div className="w-5 border-b-2 border-[#9B77FF]" />
          <p className="text-zinc-50">
            ERP system projectequipped with robust authentication to keep things
            secure, a sleek dashboard for a quick overview, and multiple tables
            for detailed financial tracking and customer management.
          </p>
          <p className="font-bold font-normal text-[#9B77FF]">
            React | NodeJS | TailwindCSS | MongoDB
          </p>
          <div className="flex flex-row gap-3">
            <a href="https://github.com/souzatotolo/gestech_landing_react">
              {' '}
              <FiGithub
                size={30}
                color="#fff"
                className="hover:text-[#9B77FF]"
              />
            </a>
            <a href="https://somnium-app.vercel.app/">
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
      <p className=" font-bold text-[40px] text-[#9B77FF]">Get in touch</p>
      <p className="text-white md:w-[570px] text-center">
        Thank you for taking the time to visit my portfolio! If you have any
        questions, feedback, or project inquiries, please feel free to reach out
        to me. I am always excited to connect with new people and discuss how I
        can help bring their vision to life. Looking forward to hearing from you
        soon!
      </p>
      <div className="flex md:mt-5 text-zinc-50 flex-row font-light text-1xl gap-5">
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
      <p className="text-[#9B77FF] py-10">Developed by Richard Totolo</p>
    </div>
  );
};
