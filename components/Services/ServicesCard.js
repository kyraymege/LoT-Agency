import React from 'react'

const ServicesCard = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen overflow-x-hidden overflow-y-hidden gap-y-10'>
            <div className=''>
                <div className='flex gap-x-2 opacity-50'>
                    <h1 className="sm:text-5xl text-7xl font-bold mb-2 dark:text-gray-400 text-white">Services</h1>
                </div>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <div className='flex flex-col gap-y-10'>
                <div className='flex lg:flex-row flex-col'>
                    <div className='bg-white bg-opacity-25 container mx-auto w-full p-10 gap-y-6 shadow-2xl backdrop-blur-md rounded-lg backdrop-webkit flex flex-col justify-center items-center'>
                        <h1 className='lg:text-5xl text-2xl font-bold text-center bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-800 text-transparent'>Influencer Agency</h1>
                        <p className='lg:text-lg text-sm font-medium text-white break-all'>If you do not have a marketing employee and you want to organize marketing campaigns, this service is for you. He can provide services for you and help you organize campaigns. We can make everything you have in mind happen. In addition, we can make campaign suggestions according to the content of your project and provide full support for promotion. With marketing campaigns suitable for your budget, your project will be everywhere!</p> 
                    </div>

                </div>
                <div className='flex lg:flex-row flex-col'>
                    <div className='bg-white bg-opacity-25 container mx-auto w-full p-10 gap-y-6 shadow-2xl backdrop-blur-md rounded-lg backdrop-webkit flex flex-col justify-center items-center'>
                        <h1 className='lg:text-5xl text-2xl font-bold text-center bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-800 text-transparent'>Marketing Manager</h1>
                        <p className='lg:text-lg text-sm font-medium text-white break-all'>If you have a marketing employee and you want to cooperate with the necessary people, then this service is for you. By providing all the necessary controls for you, we can meet you with the necessary people and provide an excellent work experience. In addition, while doing all this, all you have to do is tell us about the campaign you are thinking about. We will take care of everything.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard