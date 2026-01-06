import React from 'react'

const DiagnostikCard = () => {
  return (
    <div>
        <div className="flex justify-center py-12">
        <div className="w-6xl h-[658px] md:h-130 rounded-2xl md:bg-[url('src/assets/homev3.webp')] bg-[url('src/assets/homev3mobile.webp')] bg-cover bg-center relative overflow-hidden">
          <h1 className="text-black font-semibold text-2xl md:text-5xl text-left w-72 md:w-xl absolute top-10 left-8 leading-10 md:leading-17">
            <span className="text-green-600 font-bold">Matematika</span>{" "}
            bo’yicha eng kuchli sunʼiy intellekt ustoz
          </h1>
          <p className="absolute top-42 md:top-63 left-8 text-black text-base md:text-2xl font-medium">
            Bilim darajangizni bepul aniqlang!
          </p>
          <button className="w-[255px] md:w-[295px] absolute bottom-85 md:bottom-32 left-8 py-3 bg-green-500 rounded-2xl text-xl font-semibold text-white hover:bg-green-600">
            Diagnostikani boshlash
          </button>
        </div>
      </div>
    </div>
  )
}

export default DiagnostikCard