import {useState} from "react";
import { tests } from "../testsData.js";
import Card from "./Card.jsx";
import { FaVolumeUp, FaPlay, FaTimes } from "react-icons/fa";
import video_bg from '../../../assets/piima_video_bg.webp';
import video from '../../../assets/piima_video_preview.webp';

const Piima = () => {
  const [isOpen, setIsOpen] = useState(false);
  const presidentTests = tests.filter((t) => t.category === "piima");
  return (
    <div className=" space-y-5">
      <div className="relative flex w-full flex-col items-stretch overflow-hidden rounded-xl bg-[#2959c2] lg:flex-row lg:rounded-[30px]">
        <img
          src={video_bg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-5 flex flex-col justify-center px-6 py-10 lg:px-14">
          <div className="mb-4 flex items-center space-x-2">
            <div className="rounded-full bg-white/10 px-4 py-2 text-base font-medium text-white backdrop-blur-[18px]">
              Kerakli ma’lumot
            </div>
            <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full text-white bg-green-500">
              <FaVolumeUp />{" "}
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-medium text-white lg:text-4xl">
            Prezident maktablariga tayyorlovchi test
          </h2>
          <p className="max-w-[280px] text-lg text-white">
            Imtihondan oldin ko‘rishingiz kerak bo‘lgan video
          </p>
        </div>
        <div className="relative z-5 flex items-center justify-center p-2.5 lg:px-8 lg:py-7">
          <div className="flex h-[308px] w-[406px] flex-col items-center justify-start overflow-hidden rounded-xl bg-white p-2.5 tb-shadow-lg lg:rounded-[30px]">
            <div className="w-full px-2 pb-2 lg:px-3 lg:pb-3 lg:pt-1">
              <span className="text-sm font-medium text-black">
                Prezident maktablariga tayyorlovchi test
              </span>
            </div>
            <div className="group relative flex w-full flex-1 items-center justify-center overflow-hidden rounded-xl lg:rounded-[30px]" onClick={() => setIsOpen(true)}>
              <img
                src={video}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="z-10 flex size-10 items-center justify-center rounded-full bg-white transition-all group-hover:scale-110">
                {" "}
                <FaPlay />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* video */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex w-full justify-center pt-4 items-end sm:pb-4 md:items-center bg-black/70">
          <div className="relative w-full border bg-white outline-none pt-5 rounded-t-default md:rounded-default max-h-[90vh] overflow-y-auto md:max-w-[1111px]">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 flex aspect-square size-9 items-center justify-center rounded-full bg-neutral-200 hover:bg-neutral-300"
            >
              <FaTimes className="text-lg text-black" />
            </button>

            <h2 className="px-4 pb-2 text-base tracking-tight lg:text-lg lg:font-semibold text-black">
              Prezident maktablariga tayyorlovchi test
            </h2>

            <div className="aspect-video min-h-[70vh] w-full p-4">
              <iframe
                className="w-full h-full rounded-lg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                src="https://www.youtube.com/embed/P1F50C62Vz8?autoplay=1"
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {presidentTests.map((test) => (
          <Card key={test.id} {...test} />
        ))}
      </div>
    </div>
  );
};

export default Piima;
