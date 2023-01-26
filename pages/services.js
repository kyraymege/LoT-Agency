import React from 'react'
import Header from "../components/Header";
import ServicesComponent from '../components/Services/ServicesComponent';

const services = () => {
  return (
    <div className="scrollbar">
      <Header />
      <div className='bg-primary'>
        <ServicesComponent />
      </div>
    </div>
  )
}

export default services