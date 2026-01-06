import React from "react";
import { ChevronRightIcon, PlayIcon } from "@heroicons/react/24/outline";
import { Workflow } from "lucide-react";
const MathCards = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 relative">
      <div className="flex justify-between">
        <h2 className="text-black text-3xl lg:text-4xl font-semibold ">
          Matematika
        </h2>
        <div className="flex items-center space-x-5 bg-[rgb(236,235,227)] py-2 px-5 rounded-2xl absolute bottom-0 left-0 lg:static">
          <p className="font-medium text-xl">Barchasini ko'rish</p>
          <p>
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
        </div>
      </div>
      {/* cards */}
      <div className=" py-8 flex flex-col lg:flex-row flex-wrap space-x-4 space-y-5 ">
        <div className="rounded-2xl w-full lg:w-[277px] lg:h-[376px] p-4 lg:p-5 space-y-3 bg-green-600 relative">
          <div className="flex space-x-3 relative">
            <div className="bg-white w-11 h-11 p-2 rounded-xl flex">
              <PlayIcon className=" text-green-500" />
            </div>
            <div>
              <h2 className="text-white text-2xl font-medium">
                Mantiqiy matematika
              </h2>
              <button className=" hidden lg:block rounded-full bg-white/15 px-2 text-sm font-medium text-white mt-2">
                Qiziqarli jumboqlar
              </button>
              <div className="lg:hidden flex items-center">
                <Workflow className="w-4 h-4 text-white" />
                <p className="text-white">154 ko'nikmalar</p>
              </div>
            </div>
            <p className="lg:hidden absolute right-1 top-4 text-white">
              <ChevronRightIcon className="h-6 w-6 " />
            </p>
          </div>
          <div className="hidden lg:flex space-x-5 justify-center mt-8">
            <div className="bg-white/20 text-center px-5 py-3 rounded-2xl w-[116px]">
              <p className="text-3xl text-white">51</p>
              <p className="text-white font-semibold text-sm">Ko'nikmalar</p>
            </div>
            <div className="bg-white/20 text-center px-5 py-3 rounded-2xl w-[116px]">
              <p className="text-3xl text-white">159</p>
              <p className="text-white font-semibold text-sm">Videolar</p>
            </div>
          </div>
          <button className="hidden lg:block bg-white text-green-600 px-7 py-3 rounded-2xl font-medium text-lg mt-7 hover:brightness-80 absolute bottom-5">
            O'rganishni boshlash
          </button>
        </div>
        <div className="bg-white rounded-2xl w-full lg:w-[270px] lg:h-[376px] p-2 lg:p-5 space-y-3 relative ">
          <div className="flex space-x-3">
            <div className=" mt-2 lg:mt-0 w-14 h-15 rounded-2xl bg-red-500 flex items-center justify-center text-3xl text-white font-bold">
              1
            </div>
            <div className="flex items-center space-x-1 lg:flex-col lg:items-start">
              <h2 className="text-black text-2xl font-medium">1-sinf</h2>
              <button className="rounded-full bg-red-100 px-2 text-sm font-medium text-red-500 mt-2">
                Boshlang’ich
              </button>
            </div>
          </div>
          <div className=" absolute top-13 left-17 lg:top-22 lg:left-5 flex items-center">
            <Workflow className="w-4 h-4 text-gray-700" />
            <p className="text-gray-500">154 ko'nikmalar</p>
          </div>
          <div className="hidden lg:block space-y-2 absolute top-30">
            <p className="text-black font-medium">Asosiy mavzular:</p>
            <ul className="list-disc list-outside text-gray-800 space-y-1 px-5 marker:text-red-500">
              <li className="text-gray-500">Narsalarning xossalari</li>
              <li className="text-gray-500">1 dan 10 gacha bo'lgan sonlar</li>
              <li className="text-gray-500">Natural sonlar</li>
            </ul>
          </div>
          <p className="lg:hidden absolute right-5 top-8 ">
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
          <button className="hidden lg:block bg-red-500 text-white px-7 py-3 rounded-2xl font-medium text-lg absolute bottom-5 hover:brightness-80">
            O'rganishni boshlash
          </button>
        </div>
        <div className="bg-white rounded-2xl w-full lg:w-[270px] lg:h-[376px] p-2 lg:p-5 space-y-3 relative">
          <div className="flex space-x-3">
            <div className="mt-2 lg:mt-0 w-14 h-15 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl text-white font-bold">
              2
            </div>
            <div className="flex items-center space-x-1 lg:flex-col lg:items-start">
              <h2 className="text-black text-2xl font-medium">2-sinf</h2>
              <button className="rounded-full bg-orange-100 px-2 text-sm font-medium text-orange-500 mt-2">
                Boshlang’ich
              </button>
            </div>
          </div>
          <div className=" absolute top-13 left-17 lg:top-22 lg:left-5 flex items-center">
            <Workflow className="w-4 h-4 text-gray-700" />
            <p className="text-gray-500">143 ko'nikmalar</p>
          </div>
          <div className="hidden lg:block space-y-2 absolute top-30">
            <p className="text-black font-medium">Asosiy mavzular:</p>
            <ul className="list-disc list-outside text-gray-800 space-y-1 px-5 marker:text-orange-500">
              <li className="text-gray-500">Sonlarni qo'shish va ayirish</li>
              <li className="text-gray-500">
                Qo'shish va ayirishning xossalari
              </li>
              <li className="text-gray-500">Uch xonali sonlari</li>
            </ul>
          </div>
          <p className="lg:hidden absolute right-5 top-8 ">
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
          <button className="hidden lg:block bg-orange-500 text-white px-7 py-3 rounded-2xl font-medium text-lg mt-8  absolute bottom-5 hover:brightness-80">
            O'rganishni boshlash
          </button>
        </div>
        <div className="bg-white rounded-2xl w-full lg:w-[270px] lg:h-[376px] p-2 lg:p-5 space-y-3 relative ">
          <div className="flex space-x-3">
            <div className="mt-2 lg:mt-0 w-14 h-15 rounded-2xl bg-yellow-500 flex items-center justify-center text-3xl text-white font-bold">
              3
            </div>
            <div className="flex items-center space-x-1 lg:flex-col lg:items-start">
              <h2 className="text-black text-2xl font-medium">3-sinf</h2>
              <button className="rounded-full bg-yellow-100 px-2 text-sm font-medium text-yellow-500 mt-2">
                Boshlang’ich
              </button>
            </div>
          </div>
          <div className=" absolute top-13 left-17 lg:top-22 lg:left-5 flex items-center">
            <Workflow className="w-4 h-4 text-gray-700" />
            <p className="text-gray-500">164 ko'nikmalar</p>
          </div>
          <div className="hidden lg:block space-y-2 absolute top-30">
            <p className="text-black font-medium">Asosiy mavzular:</p>
            <ul className="list-disc list-outside text-gray-800 space-y-1 px-5 marker:text-yellow-500">
              <li className="text-gray-500">1 dan 100 gacha sonlar</li>
              <li className="text-gray-500">Uch xonali sonlar</li>
              <li className="text-gray-500">Ko'paytirish va bo'lish</li>
            </ul>
          </div>
          <p className="lg:hidden absolute right-5 top-8 ">
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
          <button className="lg:block bg-yellow-500 text-white px-7 py-3 rounded-2xl font-medium text-lg hidden  absolute bottom-5 hover:brightness-80">
            O'rganishni boshlash
          </button>
        </div>
        <div className="bg-white rounded-2xl w-full lg:w-[270px] lg:h-[376px] p-2 lg:p-5 space-y-3 relative ">
          <div className="flex space-x-3">
            <div className="mt-2 lg:mt-0 w-14 h-15 rounded-2xl bg-green-500 flex items-center justify-center text-3xl text-white font-bold">
              4
            </div>
            <div className="flex items-center space-x-1 lg:flex-col lg:items-start">
              <h2 className="text-black text-2xl font-medium">4-sinf</h2>
              <button className="rounded-full bg-green-100 px-2 text-sm font-medium text-green-500 mt-2">
                Boshlang’ich
              </button>
            </div>
          </div>
          <div className="absolute top-13 left-17 lg:top-22 lg:left-5 flex items-center">
            <Workflow className="w-4 h-4 text-gray-700" />
            <p className="text-gray-500">149 ko'nikmalar</p>
          </div>
          <div className="hidden lg:block space-y-2 absolute top-30">
            <p className="text-black font-medium">Asosiy mavzular:</p>
            <ul className="list-disc list-outside text-gray-800 space-y-1 px-5 marker:text-green-500">
              <li className="text-gray-500">Bo'luvchilar va karralilar</li>
              <li className="text-gray-500">To'plamlar</li>
              <li className="text-gray-500">Malumotlar</li>
            </ul>
          </div>
          <p className="lg:hidden absolute right-5 top-8 ">
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
          <button className="bg-green-500 text-white px-7 py-3 rounded-2xl font-medium text-lg mt-13 hover:brightness-80 hidden lg:block absolute bottom-5 ">
            O'rganishni boshlash
          </button>
        </div>
        <div className="bg-white rounded-2xl w-full lg:w-[270px] lg:h-[376px] p-2 lg:p-5 space-y-3 relative ">
          <div className="flex space-x-3">
            <div
              style={{ background: "rgb(0, 199, 190)" }}
              className="mt-2 lg:mt-0 w-14 h-15 rounded-2xl  flex items-center justify-center text-3xl text-white font-bold"
            >
              5
            </div>
            <div className="flex items-center space-x-1 lg:flex-col lg:items-start">
              <h2 className="text-black text-2xl font-medium">5-sinf</h2>
              <button
                style={{
                  background: "rgba(48, 176, 199, 0.086)",
                  color: "rgb(48, 176, 199)",
                }}
                className="rounded-full px-2 text-sm font-medium mt-2"
              >
                O'rta bosqich
              </button>
            </div>
          </div>
          <div className="absolute top-13 left-17 lg:top-22 lg:left-5 flex items-center">
            <Workflow className="w-4 h-4 text-gray-700" />
            <p className="text-gray-500">172 ko'nikmalar</p>
          </div>
          <div className="hidden lg:block space-y-2 absolute top-30">
            <p className="text-black font-medium">Asosiy mavzular:</p>
            <ul className="list-disc list-outside text-gray-800 space-y-1 px-5 marker:text-blue-400">
              <li className="text-gray-500">Natural sonlarning bo'linishi</li>
              <li className="text-gray-500">Sonlar nazariyasi</li>
              <li className="text-gray-500">Kasrlar</li>
            </ul>
          </div>
          <p className="lg:hidden absolute right-5 top-8 ">
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
          <button
            style={{ background: "rgb(0, 199, 190)" }}
            className=" text-white px-7 py-3 rounded-2xl font-medium text-lg mt-8 hover:brightness-80 hidden lg:block absolute bottom-5"
          >
            O'rganishni boshlash
          </button>
        </div>
        <div className="bg-white rounded-2xl w-full lg:w-[270px] lg:h-[376px] p-2 lg:p-5 space-y-3 relative ">
          <div className="flex space-x-3">
            <div
              style={{ background: "rgb(48, 176, 199)" }}
              className=" mt-2 lg:mt-0 w-14 h-15 rounded-2xl flex items-center justify-center text-3xl text-white font-bold"
            >
              6
            </div>
            <div className="flex items-center space-x-1 lg:flex-col lg:items-start">
              <h2 className="text-black text-2xl font-medium">6-sinf</h2>
              <button
                style={{
                  background: "rgba(48, 176, 199, 0.086)",
                  color: "rgb(48, 176, 199)",
                }}
                className="rounded-full bg-red-100 px-2 text-sm font-medium text-red-500 mt-2"
              >
                O'rta bosqich
              </button>
            </div>
          </div>
          <div className="absolute top-13 left-17 lg:top-22 lg:left-5 flex items-center">
            <Workflow className="w-4 h-4 text-gray-700" />
            <p className="text-gray-500">211 ko'nikmalar</p>
          </div>
          <div className="hidden lg:block space-y-2 absolute top-30">
            <p className="text-black font-medium">Asosiy mavzular:</p>
            <ul className="list-disc list-outside text-gray-800 space-y-1 px-5 marker:text-blue-500">
              <li className="text-gray-500">Natural sonlarning bo'linishi</li>
              <li className="text-gray-500">Sonlar nazariyasi</li>
              <li className="text-gray-500">Kasrlar</li>
            </ul>
          </div>
          <p className="lg:hidden absolute right-5 top-8 ">
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
          <button
            style={{ background: "rgb(48, 176, 199)" }}
            className=" text-white px-7 py-3 rounded-2xl font-medium text-lg mt-8 hover:brightness-80 hidden lg:block absolute bottom-5"
          >
            O'rganishni boshlash
          </button>
        </div>
        <div className="bg-white rounded-2xl w-full lg:w-[270px] lg:h-[376px] p-2 lg:p-5 space-y-3 relative ">
          <div className="flex space-x-3">
            <div
              style={{ background: "rgb(50, 173, 230)" }}
              className=" mt-2 lg:mt-0 w-14 h-15 rounded-2xl flex items-center justify-center text-3xl text-white font-bold"
            >
              7
            </div>
            <div className="flex items-center space-x-1 lg:flex-col lg:items-start">
              <h2 className="text-black text-2xl font-medium">7-sinf</h2>
              <button
                style={{
                  background: "rgba(50, 173, 230, 0.086)",
                  color: "rgb(50, 173, 230)",
                }}
                className="rounded-full px-2 text-sm font-medium  mt-2"
              >
                O'rta bosqich
              </button>
            </div>
          </div>
          <div className=" absolute top-13 left-17 lg:top-22 lg:left-5 flex items-center">
            <Workflow className="w-4 h-4 text-gray-700" />
            <p className="text-gray-500">178 ko'nikmalar</p>
          </div>
          <div className="hidden lg:block space-y-2 absolute top-30">
            <p className="text-black font-medium">Asosiy mavzular:</p>
            <ul className="list-disc list-outside text-gray-800 space-y-1 px-5 marker:text-blue-600">
              <li className="text-gray-500">Sonli ifodalar</li>
              <li className="text-gray-500">Algebraik ifodalar</li>
              <li className="text-gray-500">Arifmetik amallarning xossalar</li>
            </ul>
          </div>
          <p className="lg:hidden absolute right-5 top-8 ">
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
          <button
            style={{ background: "rgb(50, 173, 230)" }}
            className="hidden lg:block text-white px-7 py-3 rounded-2xl font-medium text-lg  absolute bottom-5 hover:brightness-80"
          >
            O'rganishni boshlash
          </button>
        </div>
        <div className="bg-white rounded-2xl w-full lg:w-[270px] lg:h-[376px] p-2 lg:p-5 space-y-3 relative ">
          <div className="flex space-x-3">
            <div className="mt-2 lg:mt-0 w-14 h-15 rounded-2xl bg-blue-500 flex items-center justify-center text-3xl text-white font-bold">
              8
            </div>
            <div className="flex items-center space-x-1 lg:flex-col lg:items-start">
              <h2 className="text-black text-2xl font-medium">8-sinf</h2>
              <button className="rounded-full bg-blue-100 px-2 text-sm font-medium text-blue-500 mt-2">
                O'rta bosqich
              </button>
            </div>
          </div>
          <div className="absolute top-13 left-17 lg:top-22 lg:left-5 flex items-center">
            <Workflow className="w-4 h-4 text-gray-700" />
            <p className="text-gray-500">157 ko'nikmalar</p>
          </div>
          <div className="hidden lg:block space-y-2 absolute top-30">
            <p className="text-black font-medium">Asosiy mavzular:</p>
            <ul className="list-disc list-outside text-gray-800 space-y-1 px-5 marker:text-blue-500">
              <li className="text-gray-500">Algebraik kasrlar</li>
              <li className="text-gray-500">Giperbola</li>
              <li className="text-gray-500">Kvadrat ildiz va kub ildiz</li>
            </ul>
          </div>
          <p className="lg:hidden absolute right-5 top-8 ">
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
          <button className="hidden lg:block bg-blue-500 text-white px-7 py-3 rounded-2xl font-medium text-lg absolute bottom-5 hover:brightness-80">
            O'rganishni boshlash
          </button>
        </div>
        <div className="bg-white rounded-2xl w-full lg:w-[270px] lg:h-[376px] p-2 lg:p-5 space-y-3 relative ">
          <div className="flex space-x-3">
            <div className="mt-2 lg:mt-0 w-14 h-15 rounded-2xl bg-blue-900 flex items-center justify-center text-3xl text-white font-bold">
              9
            </div>
            <div className="flex items-center space-x-1 lg:flex-col lg:items-start">
              <h2 className="text-black text-2xl font-medium">9-sinf</h2>
              <button className="rounded-full bg-blue-200 px-2 text-sm font-medium text-blue-900 mt-2">
                Murakkab
              </button>
            </div>
          </div>
          <div className="absolute top-13 left-17 lg:top-22 lg:left-5 flex items-center">
            <Workflow className="w-4 h-4 text-gray-700" />
            <p className="text-gray-500">208 ko'nikmalar</p>
          </div>
          <div className="hidden lg:block space-y-2 absolute top-30">
            <p className="text-black font-medium">Asosiy mavzular:</p>
            <ul className="list-disc list-outside text-gray-800 space-y-1 px-5 marker:text-blue-900">
              <li className="text-gray-500">Kvadrat funksiya</li>
              <li className="text-gray-500">Irratsional tenglamalar</li>
              <li className="text-gray-500">Tenglamalar sistemasi</li>
            </ul>
          </div>
          <p className="lg:hidden absolute right-5 top-8 ">
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
          <button className="bg-blue-900 text-white px-7 py-3 rounded-2xl font-medium text-lg hidden lg:block absolute bottom-5 hover:brightness-80">
            O'rganishni boshlash
          </button>
        </div>
        <div className="bg-white rounded-2xl w-full lg:w-[270px] lg:h-[376px] p-2 lg:p-5 space-y-3 relative ">
          <div className="flex space-x-3">
            <div
              style={{ background: "rgb(175, 82, 222)" }}
              className="w-14 h-15 rounded-2xl flex items-center justify-center text-3xl text-white font-bold"
            >
              10
            </div>
            <div className="flex items-center space-x-1 lg:flex-col lg:items-start">
              <h2 className="text-black text-2xl font-medium">10-sinf</h2>
              <button
                style={{
                  background: "rgba(175, 82, 222, 0.086)",
                  color: "rgb(175, 82, 222)",
                }}
                className="rounded-full bg-red-100 px-2 text-sm font-medium text-red-500 mt-2"
              >
                Murakkab
              </button>
            </div>
          </div>
          <div className="absolute top-13 left-17 lg:top-22 lg:left-5 flex items-center">
            <Workflow className="w-4 h-4 text-gray-700" />
            <p className="text-gray-500">40 ko'nikmalar</p>
          </div>
          <div className="hidden lg:block space-y-2 absolute top-30">
            <p className="text-black font-medium">Asosiy mavzular:</p>
            <ul className="list-disc list-outside text-gray-800 space-y-1 px-5 marker:text-fuchsia-500">
              <li className="text-gray-500">Funksiyalar</li>
              <li className="text-gray-500">
                Ratsional va irratsional tenglama va tengsizliklar
              </li>
              <li className="text-gray-500">
                Ko'rsatkichli va logarifmik funksiyalar
              </li>
            </ul>
          </div>
          <p className="lg:hidden absolute right-5 top-8 ">
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
          <button
            style={{ background: "rgb(175, 82, 222)" }}
            className=" text-white px-7 py-3 rounded-2xl font-medium text-lg hidden lg:block absolute bottom-5 hover:brightness-80"
          >
            O'rganishni boshlash
          </button>
        </div>
        <div className="bg-white rounded-2xl w-full lg:w-[270px] lg:h-[376px] p-2 lg:p-5 space-y-3 relative">
          <div className="flex space-x-3">
            <div className="w-14 h-15 rounded-2xl bg-red-500 flex items-center justify-center text-3xl text-white font-bold">
              11
            </div>
            <div className="flex items-center space-x-1 lg:flex-col lg:items-start">
              <h2 className="text-black text-2xl font-medium">11-sinf</h2>
              <button className="rounded-full bg-red-100 px-2 text-sm font-medium text-red-500 mt-2">
                Murakkab
              </button>
            </div>
          </div>
          <div className="absolute top-13 left-17 lg:top-22 lg:left-5 flex items-center">
            <Workflow className="w-4 h-4 text-gray-700" />
            <p className="text-gray-500">34 ko'nikmalar</p>
          </div>
          <div className="hidden lg:block space-y-2 absolute top-30">
            <p className="text-black font-medium">Asosiy mavzular:</p>
            <ul className="list-disc list-outside text-gray-800 space-y-1 px-5 marker:text-red-500">
              <li className="text-gray-500">Hosila va uning tatbiqlari</li>
              <li className="text-gray-500">Integral va uning tatbiqlari</li>
              <li className="text-gray-500">Ma'lumotlar tahlili. Ehtimollik</li>
            </ul>
          </div>
          <p className="lg:hidden absolute right-5 top-8 ">
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
          <button className="bg-red-500 text-white px-7 py-3 rounded-2xl font-medium text-lg hidden lg:block absolute bottom-5 hover:brightness-80">
            O'rganishni boshlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default MathCards;
