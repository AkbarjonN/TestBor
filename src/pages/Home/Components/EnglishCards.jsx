import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Workflow } from "lucide-react";

export const EnglishCards = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 relative ">
      <div className="flex justify-between">
        <h2 className="text-black text-3xl lg:text-4xl font-semibold ">
          Ingliz tili
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
        <div className="bg-white rounded-2xl w-full lg:w-[270px] lg:h-[376px] p-2 lg:p-5 space-y-3 relative ">
          <div className="flex space-x-3">
            <div className="mt-2 lg:mt-0 w-14 h-15 rounded-2xl bg-green-500 flex items-center justify-center text-3xl text-white font-bold">
              1
            </div>
            <div className="flex items-center space-x-1 lg:flex-col lg:items-start">
              <h2 className="text-black text-2xl font-medium">Beginner</h2>
              <button className="rounded-full bg-green-100 px-2 text-sm font-medium text-green-500 mt-2">
                Boshlovchi
              </button>
            </div>
          </div>
          <div className="absolute top-13 left-17 lg:top-22 lg:left-5 flex items-center">
            <Workflow className="w-4 h-4 text-gray-700" />
            <p className="text-gray-500">76 ko'nikmalar</p>
          </div>
          <div className="hidden lg:block space-y-2 absolute top-30">
            <p className="text-black font-medium">Asosiy mavzular:</p>
            <ul className="list-disc list-outside text-gray-800 space-y-1 px-5 marker:text-green-500">
              <li className="text-gray-500">Grammar</li>
              <li className="text-gray-500">Vocabulary</li>
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
              2
            </div>
            <div className="flex items-center space-x-1 lg:flex-col lg:items-start">
              <h2 className="text-black text-2xl font-medium">Elementary</h2>
              <button
                style={{
                  background: "rgba(48, 176, 199, 0.086)",
                  color: "rgb(48, 176, 199)",
                }}
                className="rounded-full px-2 text-sm font-medium mt-2"
              >
                Boshlang’ich
              </button>
            </div>
          </div>
          <div className="absolute top-13 left-17 lg:top-22 lg:left-5 flex items-center">
            <Workflow className="w-4 h-4 text-gray-700" />
            <p className="text-gray-500">78 ko'nikmalar</p>
          </div>
          <div className="hidden lg:block space-y-2 absolute top-30">
            <p className="text-black font-medium">Asosiy mavzular:</p>
            <ul className="list-disc list-outside text-gray-800 space-y-1 px-5 marker:text-blue-400">
              <li className="text-gray-500">Grammar</li>
              <li className="text-gray-500">Vocabulary</li>
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
      </div>
    </div>
  );
};
export default EnglishCards