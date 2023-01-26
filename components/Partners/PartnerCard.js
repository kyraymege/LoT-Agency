import Link from 'next/link'
import React from 'react'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTelegramPlane, FaTiktok } from 'react-icons/fa'

const PartnerCard = ({ partner }) => {
    return (
        <div className="w-full flex items-center justify-center">

            <div className="flex justify-center flex-col items-center w-52 h-52 md:w-44 md:h-52 lg:w-64 lg:h-64 bg-gradient-to-r from-indigo-900 via-indigo-500 to-indigo-700 shadow rounded-2xl">
                <div className='flex flex-col items-center justify-center mt-4'>
                    <img className='w-24 rounded-lg' src={partner?.partner_img} alt='logo' />
                    <p className='mt-2 font-bold text-xl text-white'>{partner?.partner_name}</p>
                </div>
                <div className="flex-col items-center mt-6">
                    <div className="flex flex-col lg:flex-row gap-x-6">
                        <div className='flex items-center justify-center gap-x-2'>
                            {partner?.partner_youtube_link &&
                                <>
                                    <Link href={partner?.partner_youtube_link} passHref>
                                        <a target="_blank" rel="noopener noreferrer" className='link-item'>
                                            <AiFillYoutube className=' fill-red-600 cursor-pointer' size={36} />
                                        </a>
                                    </Link>

                                    <Link href={partner?.partner_youtube_link} passHref>
                                        <a target="_blank" rel="noopener noreferrer" className='link-item'>
                                            <p className='font-extrabold text-white text-lg'>{partner?.partner_youtube_subs}K+</p>
                                        </a>
                                    </Link>
                                </>
                            }
                            {partner?.partner_twitter_link &&
                                <>
                                    <Link href={partner?.partner_twitter_link} passHref>
                                        <a target="_blank" rel="noopener noreferrer" className='link-item'>
                                            <AiOutlineTwitter className=' fill-blue-500 cursor-pointer' size={36} />
                                        </a>
                                    </Link>
                                    <Link href={partner?.partner_twitter_link} passHref>
                                        <a target="_blank" rel="noopener noreferrer" className='link-item'>
                                            <p className='font-extrabold text-white text-lg'>{partner?.partner_youtube_subs}K+</p>
                                        </a>
                                    </Link>
                                </>
                            }
                            {partner?.partner_telegram_link &&
                                <>
                                    <Link href={partner?.partner_twitter_link} passHref>
                                        <a target="_blank" rel="noopener noreferrer" className='link-item'>
                                            <FaTelegramPlane className=' fill-cyan-500 cursor-pointer' size={36} />
                                        </a>
                                    </Link>
                                    <Link href={partner?.partner_twitter_link} passHref>
                                        <a target="_blank" rel="noopener noreferrer" className='link-item'>
                                            <p className='font-extrabold text-white text-lg'>{partner?.partner_youtube_subs}K+</p>
                                        </a>
                                    </Link>
                                </>
                            }
                            {partner?.partner_tiktok_link &&
                                <>
                                    <Link href={partner?.partner_twitter_link} passHref>
                                        <a target="_blank" rel="noopener noreferrer" className='link-item'>
                                            <FaTiktok className='fill-black cursor-pointer' size={36} />
                                        </a>
                                    </Link>
                                    <Link href={partner?.partner_twitter_link} passHref>
                                        <a target="_blank" rel="noopener noreferrer" className='link-item'>
                                            <p className='font-extrabold text-white text-lg'>{partner?.partner_youtube_subs}K+</p>
                                        </a>
                                    </Link>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PartnerCard