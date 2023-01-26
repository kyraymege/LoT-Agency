import React from 'react'
import Header from '../components/Header'
import PartnersComponent from '../components/Partners/PartnersComponent'

const partners = () => {
    return (
        <div className="scrollbar">
            <Header />
            <div className='bg-primary'>
                <PartnersComponent />
            </div>
        </div>
    )
}

export default partners