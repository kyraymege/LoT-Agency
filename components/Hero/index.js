import React, { useState } from "react";
import dynamic from 'next/dynamic'
const Tilty = dynamic(import('react-tilty'), { ssr: false })
import { TypeAnimation } from 'react-type-animation';
import Head from "next/head";

function Hero() {
    return (
        <div className="py-36 bg-primary h-screen overflow-x-hidden overflow-y-hidden ">
            <Head>
                <title>Lead Of Token Agency </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Lead Of Token Agency Services" key="title" />
            </Head>
            <dh-component>
                <Tilty max={10} style={{ transformStyle: 'preserve-3d' }} className="relative flex justify-center items-center">
                    <div className="px-6 w-full lg:w-8/12">
                        <div className="mt-8 px-6 w-full relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 ">
                            <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
                            <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
                            <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                                <TypeAnimation
                                    sequence={['Everything you will need ', 'Everything you will need in the Crypto World !',
                                        2000, 'Everything you will need ', 'Everything you will need in the Crypto Marketing !',
                                        2000,]}
                                    //  Continuing previous Text
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight"
                                    wrapper="h2"
                                    speed={25}
                                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                                />

                            </div>
                            <div className="flex justify-center items-center mb-10 sm:mb-20">
                                <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Get Started</button>
                                <button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">Learn More</button>
                            </div>
                        </div>
                        <div style={{ transform: 'translateZ(30px)' }} className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40 lg:-mt-72">
                            <div className="relative sm:w-2/3 w-11/12 justify-center flex">
                                <img src="/hero.svg" alt="Hero Image" className="max-w-lg" role="img" />
                            </div>
                        </div>
                    </div>
                </Tilty>
            </dh-component>
            {/* Code block ends */}
        </div>

    );
}

export default Hero;
