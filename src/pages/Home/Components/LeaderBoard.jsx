import React from 'react'

const LeaderBoard = () => {
  return (
    <div className='max-w-6xl mx-auto py-12'>
        <div className='bg-green-700 w-full h-80 lg:h-65 rounded-2xl p-8 relative'>
            <h2 className='text-2xl text-white lg:text-4xl font-medium absolute top-8'>Global Leaderboard</h2>
            <h2 className='text-2xl text-white lg:text-4xl font-medium absolute top-20'>
            Siz reytingda nechinchisiz?</h2>
            <button className='text-black  px-10 py-3 lg:px-18 bg-white rounded-2xl font-medium text-lg absolute bottom-28 lg:bottom-8 hover:brightness-90'>Ro'yxatdan o'tish</button>
            <img src="/src/assets/LeaderBoard.webp" alt="" className=':w-[180px] h-[180px] lg:w-[350px] lg:h-[260px] object-cover  absolute right-0 top-38 lg:right-20 lg:top-0' />
        </div> 
    </div>
  )
}

export default LeaderBoard