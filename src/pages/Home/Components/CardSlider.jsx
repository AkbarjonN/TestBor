import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
const CardSlider = () => {
  const cards = [
    {
      id: 1,
      img: "../../../assets/CardSwiper-1.webp",
      title: "Guruh Musobaqa",
      text: "Bir vaqtning o'zida bir nechta ishtirokchilar bilan musobaqa",
    },
    {
      id: 2,
      img: "../../../assets/CardSwiper-2.webp",
      title: "Online Olimpiada",
      text: "Ro'yxatdan o'ting va bizolimpiada boshlanganida sizni xabardor qilamiz!",
    },
    {
      id: 3,
      img: "../../../assets/CardSwiper-3.webp",
      title: "Testlar",
      text: "Sinov testlarini bajaring va o'z ustingizda ishlab olimpiadaga tayyorlaning",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 overflow-hidden relative">
      <div className="flex justify-between mb-12">
        <h2 className="text-black text-3xl lg:text-4xl font-semibold ">
        Musobaqalar & Tadbirlar
        </h2>
        <div className="flex items-center space-x-5 bg-[rgb(236,235,227)] py-2 px-5 rounded-2xl absolute bottom-0 left-0 lg:static">
          <p className="font-medium text-xl">Barchasini ko'rish</p>
          <p>
            <ChevronRightIcon className="h-6 w-6 " />
          </p>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="px-4"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white rounded-2xl overflow-hidden flex w-full max-w-3xl p-2 mb-8">
              <img
                src={card.img}
                className="w-[125px] h-[125px] object-cover bg-[rgb(236,235,227)] rounded-2xl"
              />
              <div className="p-4 flex flex-col">
                <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
                <p className="text-black">{card.text}</p>
                <button className=" w-60 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Batafsil
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
