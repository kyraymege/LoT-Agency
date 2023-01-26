import React from 'react'
import dynamic from 'next/dynamic'
const Tilty = dynamic(import('react-tilty'), { ssr: false })
import { useRouter } from 'next/router'

const AboutUs = () => {
    const router = useRouter();
    return (
        <div className="h-screen overflow-x-hidden overflow-y-hidden lg:py-72 py-36">
            <div className='container mx-auto flex flex-col justify-center items-center lg:flex-row'>
                <div className='lg:-rotate-90'>
                    <div className='flex gap-x-2 opacity-50'>
                        <h1 className="sm:text-5xl text-7xl font-bold mb-2 dark:text-gray-400 text-white opacity-50">About Us</h1>
                    </div>
                    <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <div className='px-20'>
                    <h1 className='text-4xl font-extrabold text-white lg:mb-10'>We are everything you need in the crypto world.</h1>
                    <p className='lg:text-2xl text-white'>With more than 5 years of experience, we have gathered under the roof of Lead Of Token with our team working on many different projects in the crypto world.Each of our team members is an expert in their field and can work target-oriented.By doing our best for you, we continue to maintain the necessary facilities and studies.</p>
                </div>
                <Tilty max={10} style={{ transformStyle: 'preserve-3d' }} className="relative flex justify-center items-center">
                    <div className='hidden lg:block'>
                        <img src='/about-us.svg' alt='' className='max-w-lg w-96' />
                    </div>
                </Tilty>
            </div>
            <div onClick={()=>router.push("/aboutUs")} className='container flex justify-end items-center lg:py-20 mx-auto '>
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

export default AboutUs