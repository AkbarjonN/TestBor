import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import olympic from "../../../assets/olympiad_bg.webp";
import ibro from "../../../assets/ibro_bg.webp";
const OlympicsCards = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div
        className="flex space-x-5 overflow-hidden overflow-x-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {/* card1 */}
        <div className="w-[321px] h-[356px] md:w-[547px] md:h-[471px] bg-cover bg-center bg-[rgb(236,235,227)] rounded-2xl relative flex-shrink-0" 
        style={{
          backgroundImage: `url(${olympic})`,
        }}>
          <button className="bg-blue-500 text-white font-medium md:text-xl text-base py-1.5 w-[248px] md:w-[298px] rounded-tl-2xl rounded-br-2xl">
            Boshlandi
          </button>
          <h2 className="mb-2.5 text-xl font-medium text-black md:text-2xl lg:text-3xl absolute left-5 top-10  md:left-10 md:top-14">
            Toshkent shahar hokimligi a’lochisi onlayn olimpiadasi
          </h2>
          <p className="text-medium text-black  md:text-lg lg:max-w-md absolute left-5 top-26 md:left-10 md:top-32 lg:top-36">
            Matematika va ingliz tili fanlaridan 1-11-sinf o’quvchilari uchun
          </p>
          <button className="bg-green-600 font-semibold text-xs text-white rounded-xl py-3 px-5 md:px-8 md:text-xl absolute left-5 top-42 md:top-46 md:left-10 lg:top-56 hover:brightness-90">
            Batafsil
          </button>
        </div>
        {/* card2 */}
        <div className="w-[321px] h-[356px] md:w-[547px] md:h-[471px] bg-cover bg-center rounded-2xl relative flex-shrink-0"
        style={{
          backgroundImage: `url(${ibro})`,
        }}>
          <button className="bg-blue-500 text-white font-medium md:text-xl text-base py-1.5 w-[248px] md:w-[298px] rounded-tl-2xl rounded-br-2xl">
            Yakunlangan
          </button>
          <h2 className="lg:text-5xl md:text-4xl text-3xl text-lime-300 font-bold absolute left-5 top-11 md:left-9 md:top-18">
          IBRO-2025
          </h2>
          <p className="text-base font-medium text-white md:text-lg absolute left-5 top-21 md:left-9 md:top-32">2-11-sinf final natijalari e'lon qilindi</p>
          <button className="bg-lime-300 font-semibold text-xs text-black rounded-xl px-6 py-4 md:px-8 md:text-xl absolute left-5 top-33 md:left-9 md:top-52 hover:brightness-90">
            Natijalar
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-12">
      <div className="flex items-center justify-center w-[256px] space-x-5 bg-[rgb(236,235,227)] py-2 lg:px-5 rounded-2xl">
          <p className="font-medium text-xl">Barchasini ko'rish</p>
          <p>
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
      </div>
      </div>
    </div>
  );
};

export default OlympicsCards;
