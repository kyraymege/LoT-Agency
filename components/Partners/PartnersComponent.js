import React, { useEffect, useState } from 'react'
import PartnerCard from './PartnerCard'
import { FcSearch } from 'react-icons/fc'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTelegramPlane, FaTiktok } from 'react-icons/fa'
import { getPartners } from '../api/api'

const PartnersComponent = () => {
    useEffect(() => {
        const partners = [{
            "partner_img": "https://yt3.googleusercontent.com/ytc/AL5GRJVkGKqN30pHPlAani_7Hi_8_Bsu96wUXmSUKh1-YQ=s88-c-k-c0x00ffffff-no-rj",
            "partner_name": "Enes Batur",
            "partner_youtube_link": "https://www.youtube.com/@newdaynewgame",
            "partner_youtube_subs": "15.9M+",
          },
          {
            "partner_img": "https://yt3.googleusercontent.com/lBUaJdeOfgGKnMI5Z1Ssuqcoh9-u_E0zv-fFVkPhHQVHakd4ZKnFs-H0KhtxXtPOKg8nC1sTRg=s88-c-k-c0x00ffffff-no-rj",
            "partner_name": "Orkun Işıtmak",
            "partner_youtube_link": "https://www.youtube.com/@orkunisitmak",
            "partner_youtube_subs": "10.2M+",
          },
          {
            "partner_img": "https://yt3.googleusercontent.com/ytc/AL5GRJUKMBO-mYmGKsjm2Gzn8kDgUxFqRyHpiKt9NqAqSSo=s88-c-k-c0x00ffffff-no-rj",
            "partner_name": "Barış Özcan",
            "partner_youtube_link": "https://www.youtube.com/@BarisOzcan",
            "partner_youtube_subs": "6.19M+",
          }]
          setPartners(partners)
    }, [])
    const [partners, setPartners] = useState([])
    const [active, setActive] = useState(0)
    const [query, setQuery] = useState("")
    return (
        <div className='flex flex-col justify-center items-center min-h-screen overflow-x-hidden overflow-y-hidden px-10 lg:pt-10 pt-36'>
            <div className='flex lg:flex-row flex-col'>
                <div className='lg:-rotate-90'>
                    <div className='flex gap-x-2'>
                        <h1 className="sm:text-5xl text-7xl font-bold mb-2 text-white opacity-50">Partners</h1>
                    </div>
                    <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <div>
                    <div className="flex flex-col w-full gap-4 lg:flex-row md:flex-col p-7">
                        <div className="relative lg:max-w-[920px] w-full px-3">
                            <input
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search"
                                className="p-4 py-3 outline-none focus pr-10  bg-gray-500 border rounded border-gray-700 text-white placeholder:text-gray-100  lg:max-w-[920px] w-full leading-4"
                            />
                            <FcSearch className='absolute pointer-events-none top-3 right-5' size={24} />
                        </div>
                        <div className='flex items-center gap-x-6'>
                            <AiFillYoutube onClick={() => setActive(1)} size={36} className={active === 1 ? 'fill-red-600 cursor-pointer' : 'fill-slate-700 cursor-pointer'} />
                            <AiOutlineTwitter onClick={() => setActive(2)} size={36} className={active === 2 ? 'fill-blue-500 cursor-pointer' : 'fill-slate-700 cursor-pointer'} />
                            <FaTelegramPlane onClick={() => setActive(3)} size={36} className={active === 3 ? 'fill-cyan-500 cursor-pointer' : 'fill-slate-700 cursor-pointer'} />
                            <FaTiktok onClick={() => setActive(4)} size={36} className={active === 4 ? 'fill-black cursor-pointer' : 'fill-slate-700 cursor-pointer'} />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10 overflow-auto scrollbar max-h-[590px] px-10'>
                        {partners?.filter(partner => partner?.partner_name.toLowerCase().includes(query.toLocaleLowerCase())).map((partner, key) =>
                            <PartnerCard key={key} partner={partner} />
                        )}
                    </div>
                    <div className='lg:flex flex-col items-center justify-center gap-x-2 hidden mt-10'>
                        <h1 className="sm:text-3xl text-5xl font-bold mb-2 text-white">Would you like to work with us ?</h1>
                        <h1 className="sm:text-3xl text-5xl font-bold mb-2 text-indigo-500 cursor-pointer">Contact with us!</h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PartnersComponent