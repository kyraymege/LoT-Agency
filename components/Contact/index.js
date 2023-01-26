import React, { useState } from 'react'
import { GrMail, GrToast } from 'react-icons/gr'
import dynamic from 'next/dynamic'
import { contactMail } from '../api/api'
const Tilty = dynamic(import('react-tilty'), { ssr: false })

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== '' && email !== '' && text !== '') {
            const res = contactMail(name, email, text);
            if (res) {
                setName("");
                setEmail("");
                setText("");
                alert("Mail sent successfully");
            }
        } else {
            alert("Please fill in all fields");
        }
    }

    return (
        <div className='flex flex-col lg:flex-row justify-center items-center h-screen overflow-x-hidden overflow-y-hidden px-10'>
            <div className="container mx-auto pt-20">
                <Tilty max={10} style={{ transformStyle: 'preserve-3d' }} className="relative flex justify-center items-center">
                    <div className="lg:flex items-center justify-center">

                        <div className="xl:w-2/5 lg:w-2/5 bg-indigo-700 lg:py-16 py-4 lg:rounded-xl">
                            <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                                <h1 className="xl:text-4xl lg:text-3xl text-lg pb-4 text-white font-bold">Get in touch</h1>
                                <p className="text-xl hidden lg:block text-white pb-8 leading-relaxed font-normal lg:pr-4">Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to asset you.</p>
                                <div className="flex flex-col items-center">
                                    <div>
                                        <img src="/contact.svg" alt='' className='w-96 hidden lg:block' />
                                    </div>
                                    <div className='flex items-center'>
                                        <GrMail size={24} className="fill-white" />

                                        <p className="pl-4 text-white text-base">support@leadoftoken.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full lg:py-10 py-5 xl:pr-5 xl:pl-0 lg:rounded-r-xl">
                            <form className="bg-white py-4 px-8 rounded-tr rounded-br">
                                <h1 className="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
                                <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                                    <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                        <div className="flex flex-col">
                                            <label htmlFor="full_name" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                                Full Name
                                            </label>
                                            <input onChange={(e) => setName(e.target.value)} value={name} required id="full_name" name="full_name" type="text" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                        <div className="flex flex-col">
                                            <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                                Email
                                            </label>
                                            <input onChange={(e) => setEmail(e.target.value)} value={email} required id="email" name="email" type="email" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-6">
                                    <div className="flex flex-col">
                                        <label className="text-sm font-semibold text-gray-800 mb-2" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea onChange={(e) => setText(e.target.value)} value={text} placeholder="" name="message" className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700" rows={8} id="message" />
                                    </div>
                                    <button onClick={handleSubmit} className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Tilty>
            </div>

        </div>
    )
}

export default Contact