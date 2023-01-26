import React, { useEffect, useState } from 'react'
import PartnerCard from './PartnerCard'
import { getPartners } from '../api/api'

const Partners = () => {
  useEffect(() => {
    getPartners().then((res) => {
      setPartners(res?.data);
    });
  }, [])
  const [partners, setPartners] = useState([])
  return (
    <div className='flex flex-col justify-center items-center h-screen overflow-x-hidden overflow-y-hidden px-10'>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='lg:-rotate-90'>
          <div className='flex gap-x-2'>
            <h1 className="sm:text-5xl text-7xl font-bold mb-2 text-white opacity-50">Partners</h1>
          </div>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 w-full gap-x-10 gap-y-10 py-10 lg:px-10 px-6 scrollbar'>
          {partners?.slice(0, 3).map((partner,key) => (
            <PartnerCard key={key} partner={partner} />
          ))}
        </div>
        <p className='text-7xl font-extrabold text-white'>+50 More</p>
      </div>
      <div className='container flex justify-end items-center lg:py-20 mx-auto '>
        <button className="relative px-5 py-2 font-medium text-white group cursor-pointer">
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-indigo-500 group-hover:bg-indigo-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-indigo-700 group-hover:bg-indigo-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-indigo-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-indigo-400 -rotate-12"></span>
          <span className="relative">Let&apos;s check our partners!</span>
        </button>
      </div>
    </div>

  )
}

export default Partners