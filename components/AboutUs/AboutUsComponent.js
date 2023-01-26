import React from 'react'

const AboutUsComponent = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-36 lg:px-20 md:py-12 md:px-6 py-36 px-4 min-h-screen">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-400 ">With more than 5 years of experience, we have gathered under the roof of Lead Of Token with our team working on many different projects in the crypto world.Each of our team members is an expert in their field and can work target-oriented.By doing our best for you, we continue to maintain the necessary facilities and studies.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:px-10">
                    <img className="max-w-xl h-full" src="/contact.svg" alt="About us" />
                </div>
            </div>

        </div>

    )
}

export default AboutUsComponent