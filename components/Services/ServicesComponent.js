import React from 'react'
import ServicesCard from './ServicesCard'
import Head from "next/head";
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
const Tilty = dynamic(import('react-tilty'), { ssr: false })

const ServicesComponent = () => {
    const router = useRouter();
    return (
        <div className="pt-24">
            <Head>
                <title>Lead Of Token Agency | Services</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Lead Of Token Agency Services" key="title" />
            </Head>
            <div className="w-full bg-primary py-12">
                <div className="container mx-auto gap-y-10">
                    <Tilty max={5} style={{ transformStyle: 'preserve-3d' }} className="relative flex justify-center items-center">
                        <div className="w-11/12 mx-auto">
                            <div className="xl:flex lg:flex items-end justify-end">
                                <div className="xl:flex lg:flex md:flex sm:flex shadow">
                                    <div className="bg-tertiary pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-9 pr-9 flex flex-col xl:w-full lg:w-full justify-center items-center border-r border-l border-gray-700">
                                        <div className="mb-6">
                                            <img src="/partners.svg" alt="Partners" className="w-36" />
                                        </div>
                                        <p className="text-center text-2xl font-bold text-white mb-3">Influencer Agency Services</p>
                                        <p className="text-center text-sm text-gray-400 mb-6 font-normal w-full">If you have a marketing employee and you want to work with influencers.</p>
                                        <button onClick={() => router.push("/contact")} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-xl group">
                                            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                            </span>
                                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Let&apos;s contact with us</span>
                                        </button>
                                    </div>
                                    <div className="bg-tertiary pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-9 pr-9 flex flex-col xl:w-full lg:w-full justify-center items-center border-r border-l border-gray-700">
                                        <div className="mb-5">
                                            <img src="/marketing.svg" alt="Marketing" className="w-36" />
                                        </div>
                                        <p className="text-center text-2xl font-bold text-white mb-3">Marketing Services</p>
                                        <p className="text-center text-sm text-gray-400 mb-6 font-normal w-full">If you don&apos;t have a marketing employee and you want to run campaigns.</p>
                                        <button onClick={() => router.push("/contact")} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-xl group">
                                            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                            </span>
                                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Let&apos;s contact with us</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow">
                                <div>
                                    <p className="pl-4 pt-3 pb-3 font-bold text-sm text-gray-400">Features</p>
                                    <table className="sm:table-fixed table-auto w-full bg-tertiary">
                                        <tbody>
                                            <tr>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-xs sm:text-sm text-white break-words">7/24 Support</td>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-center text-xs sm:text-sm text-white">
                                                    <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                                </td>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-center text-xs sm:text-sm text-white">
                                                    <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-xs sm:text-sm text-white break-words">Creating &amp; Managing Campaign</td>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-center text-xs sm:text-sm text-white">
                                                    <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                                </td>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-center text-xs sm:text-sm text-white">
                                                    <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-xs sm:text-sm text-white break-words">Managing announcements</td>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-center text-xs sm:text-sm text-white" />
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-center text-xs sm:text-sm text-white">
                                                    <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-xs sm:text-sm text-white break-words">SEO Package</td>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-center text-xs sm:text-sm text-white" />
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-center text-xs sm:text-sm text-white">
                                                    <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-xs sm:text-sm text-white break-words">Marketing Services</td>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-center text-xs sm:text-sm text-white" />
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-center text-xs sm:text-sm text-white">
                                                    <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-xs sm:text-sm text-white break-words">LoT advertisings</td>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-center text-xs sm:text-sm text-white">

                                                </td>
                                                <td className="w-3/12 border border-gray-700 p-2 sm:p-4 text-center text-xs sm:text-sm text-white">
                                                    <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </Tilty>
                    <ServicesCard />
                </div>
            </div>
        </div>

    )
}

export default ServicesComponent