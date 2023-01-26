import React from 'react'
import { useRouter } from 'next/router'
const Services = () => {
  const router = useRouter();
  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-center items-center h-screen overflow-x-hidden overflow-y-hidden px-10'>
        <div className='lg:-rotate-90'>
          <div className='flex gap-x-2 opacity-50'>
            <h1 className="sm:text-5xl text-7xl font-bold mb-2 dark:text-gray-400 text-white">Services</h1>
          </div>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <div className='hidden lg:flex'>
          <div className='bg-white bg-opacity-25 container mx-auto lg:w-1/3 w-full p-10 gap-y-6 shadow-2xl backdrop-blur-md rounded-lg backdrop-webkit flex flex-col justify-center items-center'>
            <h1 className='lg:text-5xl text-2xl font-bold text-center bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-800 text-transparent'>Marketing Manager</h1>
            <p className='lg:text-lg text-sm font-medium text-gray-600 break-normal'>If you do not have a marketing employee and you want to organize marketing campaigns, this service is for you. He can provide services for you and help you organize campaigns. We can make everything you have in mind happen. In addition, we can make campaign suggestions according to the content of your project and provide full support for promotion. With marketing campaigns suitable for your budget, your project will be everywhere!</p>
            <button onClick={()=>router.push("/contact")} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-xl group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Let&apos;s contact with us</span>
            </button>
          </div>
          <div className='bg-white bg-opacity-25 container mx-auto lg:w-1/3 w-full p-10 gap-y-6 shadow-2xl backdrop-blur-md rounded-lg backdrop-webkit flex flex-col justify-center items-center'>
            <h1 className='lg:text-5xl text-2xl font-bold text-center bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-800 text-transparent'>Influencer Manager</h1>
            <p className='lg:text-lg text-sm font-medium text-gray-600 break-normal'>If you have a marketing employee and you want to cooperate with the necessary people, then this service is for you. By providing all the necessary controls for you, we can meet you with the necessary people and provide an excellent work experience. In addition, while doing all this, all you have to do is tell us about the campaign you are thinking about. We will take care of everything.</p>
            <button onClick={()=>router.push("/contact")} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-xl group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Let&apos;s contact with us</span>
            </button>
          </div>
        </div>
        <div className='lg:hidden mt-6'>
          <div className='bg-white bg-opacity-25 container mx-auto lg:w-1/3 w-full p-10 gap-y-6 shadow-2xl backdrop-blur-md rounded-lg backdrop-webkit flex flex-col justify-center items-center'>
            <h1 className='lg:text-5xl text-2xl font-bold bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-800 text-transparent'>Marketing 	&amp; Influencer Manager</h1>
            <p className='lg:text-lg text-sm font-medium text-gray-600 break-all'>Depending on the status of your marketing employee, we have the appropriate services for you. For detailed information, you can reach our service page by clicking on the button below.</p>
            <button onClick={()=>router.push("/contact")} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-xl group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Let&apos;s contact with us</span>
            </button>
          </div>
        </div>
      </div>
      <div onClick={() => router.push("/services")} className='container flex justify-end items-center -mt-20 lg:-mt-36 mx-auto '>
        <button className="relative px-5 py-2 font-medium text-white group cursor-pointer">
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-indigo-500 group-hover:bg-indigo-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-indigo-700 group-hover:bg-indigo-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-indigo-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-indigo-400 -rotate-12"></span>
          <span className="relative">Learn More About us</span>
        </button>
      </div>
    </div>
  )
}

export default Services