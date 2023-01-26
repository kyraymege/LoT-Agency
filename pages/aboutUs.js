import React from 'react'
import AboutUsComponent from '../components/AboutUs/AboutUsComponent';
import Header from "../components/Header";

const aboutUs = () => {
    return (
        <div className="scrollbar">
            <Header />
            <div className='bg-primary'>
                <AboutUsComponent />
            </div>
        </div>
    )
}

export default aboutUs