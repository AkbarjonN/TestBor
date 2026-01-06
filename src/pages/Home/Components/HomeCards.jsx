import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Gamepad2, Brain } from "lucide-react";
import person1 from "/src/assets/person1.png";
import person2 from "/src/assets/person2.png";
const HomeCards = () => {
  return (
    <div className="py-12 max-w-6xl mx-auto">
      <h2 className="text-black text-3xl lg:text-4xl font-semibold ">
        Siz uchun qiziqarli!
      </h2>

      <div
        className="flex mt-12 space-x-5 overflow-hidden overflow-x-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {/* card1 */}
        <div className="w-[365px] h-[270px] p-4 bg-green-500 rounded-2xl relative flex-shrink-0">
          <div className="flex space-x-5">
            <div className="bg-white w-11 h-11 p-2 rounded-xl flex">
              <PlayIcon className=" text-green-500" />
            </div>
            <div>
              <h2 className="text-white text-xl font-bold">
                O'qishni davom ettiring
              </h2>
              <button className="rounded-full bg-white/15 px-1.5 py-0.5 text-sm font-medium text-white mt-2">
                Darslar
              </button>
            </div>
          </div>
          <p className="font-bold text-white absolute bottom-32 ">
            Hozirgi mavzu:
          </p>
          <p className="font-semibold text-white absolute bottom-32 right-4">
            %
          </p>
          <div className=" absolute bottom-25 w-[330px] h-2 rounded-full bg-white/20"></div>
          <button className="w-[333px] py-3 rounded-xl font-semibold text-lg bg-white text-green-600 absolute bottom-3 hover:bg-gray-200">
            Keling davom etamiz!
          </button>
        </div>
        {/* card2 */}
        <div className="w-[329px] h-[270px] p-4 bg-blue-500 rounded-2xl relative flex-shrink-0">
          <div className="flex space-x-5 ">
            <div className="bg-white w-11 h-11 p-2 rounded-xl flex">
              <Brain className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold">Diagnostika! 🧠</h2>
              <div className="flex space-x-3 mt-2">
                <button className="rounded-full bg-white/15 px-1.5 py-0.5 text-sm font-medium text-white">
                  Tezkor test
                </button>
                <p className="text-white text-sm"> 5-10 min</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-5 justify-center mt-4">
            <div className="bg-white/20 text-center px-5 py-1 rounded-2xl w-[116px]">
              <p className="text-3xl">⚡️</p>
              <p className="text-white font-semibold text-sm">Bir zumda</p>
              <p className="text-sm text-white">Natijalar</p>
            </div>
            <div className="bg-white/20 text-center px-5 py-1 rounded-2xl w-[116px]">
              <p className="text-3xl">🎯</p>
              <p className="text-white font-semibold text-sm">Smart</p>
              <p className="text-sm text-white">Savollar</p>
            </div>
          </div>
          <button className="w-[297px] py-3 rounded-xl font-semibold text-lg bg-white text-blue-500 absolute bottom-3 hover:bg-gray-200">
            Keling davom etamiz!
          </button>
        </div>
        {/* card3 */}
        <div className="w-[329px] h-[270px] p-4 bg-yellow-500 rounded-2xl relative flex-shrink-0">
          <div className="flex space-x-5">
            <div className="bg-white w-11 h-11 p-2 rounded-xl flex">
              <Gamepad2 className="w-8 h-8 text-yellow-500" />
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold">Musobaqa! 🎮</h2>
              <div className="flex space-x-3 mt-2">
                <button className="rounded-full bg-white/15 px-1.5 py-0.5 text-sm font-medium text-white">
                  Guruh
                </button>
                <p className="text-white text-sm">1 ga 1</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-10 justify-center mt-4 relative">
            <div className="bg-white/20 text-center px-5 py-3 rounded-2xl w-[116px]">
              <img src={person1} alt="" className="rounded-full" />
            </div>
            <p className="text-white text-2xl font-medium absolute top-6 left-34">
              vs
            </p>
            <div className="bg-white/20 text-center px-5 py-3 rounded-2xl w-[116px]">
              <img src={person2} alt="" className="rounded-full" />
            </div>
          </div>
          <button className="w-[297px] py-3 rounded-xl font-semibold text-lg bg-white text-yellow-500 absolute bottom-3 hover:bg-gray-200">
            Keling davom etamiz!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
