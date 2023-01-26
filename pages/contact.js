import React from 'react'
import Header from "../components/Header";
import ContactComponent from '../components/Contact';

const contact = () => {
    return (
        <div className="scrollbar">
            <Header />
            <div className='bg-primary'>
                <ContactComponent />
            </div>
        </div>
    )
}

export default contact