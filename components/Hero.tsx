import React from 'react';
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/magic-button';
import { FaLocationArrow } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='pb-20'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center lg:items-start justify-center text-center lg:text-left'>
          <h2 className='uppercase tracking-widest text-xs text-blue-100 max-w-80'>
            Dynamic Web Design with Next.js
          </h2>
          <TextGenerateEffect 
            className='text-[40px] md:text-5xl lg:text-6xl'
            words="Hi, I'm Frodewald Grimbert, a Web Developer based in Indonesia"
          />
          <p className='md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            &quot;Empowering Brands Through Digital Experiences.&quot;
          </p>
          <a href="#about" className='md:mt-10'>
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>

        {/* Profile Image Section */}
        <div className='mt-10 lg:mt-0 lg:ml-10 flex-shrink-0'>
        <Image 
          src='/frodewald.jpg' // Replace with your image path
          alt='Frodewald Grimbert' 
          width={300} 
          height={300} 
          className='rounded-full shadow-lg border-4 border-white dark:border-black-300 animate-scale-in'
        />
        </div>
      </div>
    </div>
  );
};

export default Hero;
