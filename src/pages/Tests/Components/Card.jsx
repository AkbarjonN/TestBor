import React from "react";
import { FaStar, FaInfoCircle, FaPlay, FaShoppingCart } from "react-icons/fa";

const Card = ({ image, title, rating, students, duration, price, isFree }) => {
  return (
    <div className=" w-[375px] h-[410px] rounded-3xl border border-gray-200 bg-[rgb(236,235,227)] p-2 pb-5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
      <div className="bg-white space-y-5 p-5 rounded-3xl w-[355px] h-[310px]">

      {/* Top image + title */}
      <div className="flex flex-col gap-3">
        <img src={image} alt={title} className="w-14 h-14 object-contain" />
        <h3 className="text-2xl font-semibold text-gray-800">
          {title}
        </h3>
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-600">
        <span className="flex items-center gap-1 border border-gray-200 rounded-2xl px-4 py-2">
          <FaStar className="text-yellow-400" /> {rating}
        </span>
        <span className="border border-gray-200 rounded-2xl px-4 py-2">
          {students} o‘quvchi
        </span>
        <span className="border border-gray-200 rounded-2xl px-4 py-2">
          {duration} daqiqa
        </span>
      </div>

      {/* Price */}
      <p className="mt-2 text-3xl font-medium">
        {isFree ? (
          <span className="text-gray-800">Bepul</span>
        ) : (
          <span className="text-green-600">{price} so‘m</span>
        )}
      </p>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex items-center justify-between gap-2">
        <button className="flex items-center gap-1 rounded-full border border-gray-200 px-10 py-3 text-sm text-gray-500 bg-white hover:bg-gray-100 transition">
          <FaInfoCircle /> Tafsilotlar
        </button>

        {isFree ? (
          <button className="flex items-center gap-1 rounded-full bg-green-600 px-10 py-3 text-sm text-white hover:bg-green-700 transition">
            <FaPlay /> Boshlash
          </button>
        ) : (
          <button className="flex items-center gap-1 rounded-full bg-green-600 px-10 py-3 text-sm text-white hover:bg-green-700 transition">
            <FaShoppingCart /> Sotib olish
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
