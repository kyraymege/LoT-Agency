import React, { useState } from 'react'
import { AiOutlineExpand } from "react-icons/ai"
import Link from "next/link"

const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='absolute w-full z-50'>
            <ul className={show ? `flex w-full h-screen text-3xl items-center py-10 flex-col justify-center fixed top-0 bottom-0 left-0 right-0 bg-tertiary z-30 lg:gap-y-10` : 'hidden'}>

                <li className="text-gray-400 hover:text-white hover:scale-125  cursor-pointer text-lg font-medium lg:text-5xl pt-10 md:pt-0">
                    <Link href="/aboutUs">
                        <h1 className=''>About Us</h1>
                    </Link>
                </li>
                <li className="text-gray-400 hover:text-white hover:scale-125 cursor-pointer text-lg font-medium lg:text-5xl pt-10 md:pt-0">
                    <Link href="/services">
                        <h1 className=''>Services</h1>
                    </Link>
                </li>
                <li className="text-gray-400 hover:text-white hover:scale-125 cursor-pointer text-lg font-medium lg:text-5xl pt-10 md:pt-0">
                    <Link href="/partners">
                        <h1 className=''>Partners</h1>
                    </Link>
                </li>
                <li className="text-gray-400 hover:text-white hover:scale-125 cursor-pointer text-lg font-medium lg:text-5xl pt-10 md:pt-0">
                    <Link href="/contact">
                        <h1 className=''>Contact</h1>
                    </Link>
                </li>

            </ul>
            < div className="py-6 lg:px-56 px-6 flex justify-between items-center" >
                <Link href="/">
                    <img src="/logo.png" alt="logo" className="w-36 z-50 cursor-pointer" />
                </Link>

                <div onClick={() => setShow(!show)} className={`block text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 z-40 top-0 mt-6 cursor-pointer`}>
                    {!show ?
                        <span className='absolute py-4 px-5 leading-none '>
                            <p className={'text-white font-extrabold text-md'}>ME</p>
                            <p className={'text-white font-extrabold text-md'}>NU</p>
                        </span>
                        :
                        <span className='absolute py-4 px-6 leading-none '>
                            <p className={'text-white font-extrabold text-md'}>HI</p>
                            <p className={'text-white font-extrabold text-md'}>DE</p>
                        </span>}

                    <AiOutlineExpand size={64} className="fill-indigo-500" />
                </div>

            </div >
        </div>
    )
}

export default Header