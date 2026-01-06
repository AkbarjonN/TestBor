import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import { useState } from "react";
const Footer = () => {
  const [openOffers, setOpenOffers] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const links = [
    { id: 1, label: "IBRO-2025" },
    { id: 2, label: "O'qituvchi bo'lish" },
    { id: 3, label: "1-11 sinflar" },
    { id: 4, label: "Testlar" },
    { id: 5, label: "Obunalar" },
  ];
  const resourcesLink = [
    { id: 1, label: "Blog" },
    { id: 2, label: "Contact us" },
    { id: 3, label: "Company" },
    { id: 4, label: "Recommendations" },
    { id: 5, label: "Frequently asked questions" },
  ];
  const socialLinks = [
    {
      id: 1,
      name: "Instagram",
      href: "https://www.instagram.com/testboruz?igsh=Nmx4MmI3ajNtYWti",
      icon: <FaInstagram />,
    },
    {
      id: 2,
      name: "Facebook",
      href: "https://facebook.com/people/Testboruz/61559545471669/",
      icon: <FaFacebookF />,
    },
    {
      id: 3,
      name: "Youtube",
      href: "https://youtube.com/@testborai?si=HrZlM6_i7M-RUdJ2",
      icon: <FaYoutube />,
    },
    {
      id: 4,
      name: "Telegram",
      href: "https://t.me/testbor",
      icon: <FaTelegramPlane />,
    },
  ];
  return (
    <div className="bg-gray-100 px-3 pt-10">
      {/* Footer top */}
      <div className="max-w-6xl mx-auto mb-12 hidden items-center border-b border-gray-300 py-12 md:grid lg:grid-cols-2">
        <p className="text-gray-400 text-sm font-normal md:text-base lg:text-3xl">
          Testbor – Ta'lim sari sizning yordamchingiz!
        </p>
        <div className="flex flex-row items-center justify-end">
          <div className="flex flex-row items-center justify-between gap-4">
            <p className="text-xl">Aloqa</p>
            <div className="text-primary w-[52px] h-[52px] rounded-full flex justify-center items-center bg-green-500">
              <ArrowRightIcon className="w-10 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer center */}
      <div className="max-w-6xl mx-auto grid pb-12 lg:grid-cols-2">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-start justify-between gap-8 md:items-start">
            <Link to="/" className="text-3xl font-bold">
              TestBor<span className="text-green-600">.</span>
            </Link>
            <p className="flex text-sm font-normal md:hidden md:text-base lg:text-3xl">
              Testbor – Ta'lim sari sizning yordamchingiz!
            </p>
            <p className="text-base font-normal">
              <span className="inline-block text-right font-semibold">
                27 277 575
              </span>{" "}
              ta savolga javob berildi!
            </p>
          </div>
        </div>
        {/* Footer links */}
        <div className="gap-5 md:gap-18 mt-6 grid grid-cols-1 md:grid-cols-2 lg:mt-0 lg:grid-cols-3">
          <div className="flex-flex-col items-center md:items-start">
            <div
              className="mb-4 flex w-full cursor-pointer items-center justify-between text-lg font-semibold text-gray-500 md:mb-[18px] md:cursor-text md:text-base md:font-normal"
              onClick={() => setOpenOffers(!openOffers)}
            >
              Bizning takliflar
              <span
                className={`transition-all duration-300 md:hidden ${
                  openOffers ? "rotate-180" : ""
                }`}
              >
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              </span>
            </div>
            <ul
              className={`flex flex-col gap-3 ${
                openOffers ? "block" : "hidden"
              } md:flex`}
            >
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href=""
                    className="text-sm font-normal md:text-base md:font-normal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-flex-col items-center md:items-start">
            <div
              className="mb-4 flex w-full cursor-pointer items-center justify-between text-lg font-semibold text-gray-500 md:mb-[18px] md:cursor-text md:text-base md:font-normal"
              onClick={() => setOpenResources(!openResources)}
            >
              Manbalar
              <span
                className={`transition-all duration-300 md:hidden ${
                  openResources ? "rotate-180" : ""
                }`}
              >
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              </span>
            </div>
            <ul
              className={`flex flex-col gap-3 ${
                openResources ? "block" : "hidden"
              } md:flex`}
            >
              {resourcesLink.map((link) => (
                <li key={link.id}>
                  <a
                    href=""
                    className="text-sm font-normal md:text-base md:font-normal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden flex-col items-center text-gray-500 md:flex md:items-start">
            <div className="mb-4 flex w-full cursor-pointer items-center justify-between text-lg font-semibold md:mb-[18px] md:cursor-text md:text-base md:font-normal">
              Bizga qo'shiling
              <span className="transition-all md:hidden">
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.id} className="text-center md:text-start">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2 text-sm font-normal md:text-base md:font-normal"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="max-w-6xl mx-auto border-t border-gray-300">
        <div className="flex flex-col-reverse items-center justify-between gap-x-5 gap-y-6 text-gray-500 text-opacity-40 md:flex-row py-10">
          <p className="text-center text-sm">
            ©2025 Testbor, Inc. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex flex-wrap items-center gap-5 sm:flex-nowrap md:gap-7 lg:gap-10">
            <a href="" className="text-sm">
              Mahfiylik siyosati
            </a>
            <a href="" className="text-sm">
              Foydalanish shartlari
            </a>
            <a href="" className="text-sm">
              Do'kon
            </a>
          </div>
          <div className="flex items-center gap-5 md:hidden">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-gray-400"
              >
                <span className="text-lg">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
