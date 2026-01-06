import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import card1 from '../../../assets/store_card1.jpeg';
import card2 from '../../../assets/store_card2.jpeg';
import card3 from '../../../assets/store_card3.jpeg';
import card4 from '../../../assets/store_card4.jpeg';
import card5 from '../../../assets/store_card5.jpeg';
import card6 from '../../../assets/store_card6.jpeg';
import card7 from '../../../assets/store_card7.jpeg';
import card8 from '../../../assets/store_card8.jpeg';
import card9 from '../../../assets/store_card9.jpeg';
import card10 from '../../../assets/store_card10.jpeg';
import card11 from '../../../assets/store_card11.jpeg';
import card12 from '../../../assets/store_card12.jpeg';

const Store = () => {
  const products = [
    {
      id: 1,
      image: card1,
      price: "12,000",
      name: "Смарт-часы 2E Wave",
    },
    {
      id: 2,
      image: card2,
      price: "15,000",
      name: "Смарт-часы 2E Wave",
    },
    {
      id: 3,
      image: card3,
      price: "18,000 ",
      name: "Quyosh batareyasida ishlaydigan Robot",
    },
    {
      id: 4,
      image: card4,
      price: "19,000",
      name: "Детские умные часы",
    },
    {
      id: 5,
      image: card5,
      price: "19,500",
      name: "Детский умные часы",
    },
    {
      id: 6,
      image: card6,
      price: "19,500",
      name: "GS8 Plus Ultra",
    },
    {
      id: 7,
      image: card7,
      price: "27,000",
      name: "Смарт часы Canyon",
    },
    {
      id: 8,
      image:card8,
      price: "50,000",
      name: "'Знаток' Arduino Mobile",
    },
    {
      id: 9,
      image: card9,
      price: "90,000 ",
      name: "HUAWEI NOVA 12SE",
    },
    {
      id: 10,
      image: card10,
      price: "140,000",
      name: "Apple Watch",
    },
    {
      id: 11,
      image: card11,
      price: "140,000",
      name: "Apple Watch",
    },
    {
      id: 12,
      image: card12,
      price: "280,000",
      name: "Apple Watch",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto py-12 relative">
      <h2 className="text-3xl font-medium lg:text-authHead">Testbor Do'kon</h2>
      <div className="flex justify-between items-center">
        <p className="text-lg text-gray-600 lg:text-2xl">
          TCoinlarni ishlatgan holda mahsulotlarni xarid qiling
        </p>
        <div className="flex items-center justify-center w-[256px] space-x-5 bg-[rgb(236,235,227)] py-2 lg:px-5 rounded-2xl absolute bottom-0 left-0 lg:static">
          <p className="font-medium text-xl">Barchasini ko'rish</p>
          <p>
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
        </div>
      </div>
      <div
        className="flex mt-12 space-x-5 overflow-hidden overflow-x-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex h-[350px] w-full max-w-[266px] shrink-0 flex-col space-y-3 rounded-2xl border border-[#EDECE5] bg-white p-5 mb-5"
          >
            <div className="flex h-42 w-full items-center justify-center bg-[rgb(236,235,227)] rounded-2xl">
              <img
                src={product.image}
                alt=""
                className="h-[145px] w-[145px] object-contain"
              />
            </div>

            <div className=" space-x-1">
              <span className="text-lg font-semibold text-orange-400 lg:text-xl">
                {product.price}
              </span>
              <span className="text-lg text-black">Tcoin</span>
            </div>

            <p className="line-clamp-2 min-h-10 text-base font-normal text-black">
              {product.name}
            </p>

            <button className=" flex justify-center items-center bg-green-500 px-5 py-2 rounded-[10px] text-white text-base font-medium hover:brightness-90">
              Sotib olish
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
