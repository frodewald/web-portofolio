'use client'

import React, { useState } from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { certificates, companies } from '@/data'

const Certificates = () => {
  const [hovered, setHovered] = useState(false)
  const handleHover = () => setHovered(true)
  const handleLeave = () => setHovered(false)

  const certifLink = 'https://drive.google.com/drive/folders/1JjmtA8Lt9XNlM_FAWQHpgz5BRMUvvYoG?usp=sharing';

  return (
    <div className='py-20 bg-[#000319]' id='testimonials'>
      <h1 className='heading pb-6 text-white'>
        My {' '}
        <span className='text-purple'>Certificate</span>
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <div
          className='relative'
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <InfiniteMovingCards 
            items={certificates}
            direction='right'
            speed='slow'
          />
          <div
            className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black-100 to-blue-950 text-white text-xl font-semibold rounded-lg p-5 cursor-pointer z-30 shadow-lg transition-opacity duration-500 ease-in-out ${hovered ? 'opacity-20' : 'opacity-0'}`}
            onClick={() => window.open(certifLink, '_blank')}
          >
            <span className='text-5xl font-extrabold'>See More...</span>
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-8 max-lg:mt-10'>
          {companies.map(({id, img, name}) => (
            <div key={id} className='flex gap-2'>
              <img src={img} alt={name} className='md:h-10 h-8'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certificates