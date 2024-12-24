'use client';

import { workExperience } from '@/data';
import React, { useEffect, useMemo } from 'react';
import { Button } from './ui/moving-border';
import useVisibility from '@/hooks/useVisibility';

const Experiences = () => {
  const { visibleItems, observe } = useVisibility();

  useEffect(() => {
    const experienceItems = document.querySelectorAll('.experience-item');
    observe(experienceItems);

    return () => {
      observe([]); // Bersihkan observer saat unmount
    };
  }, [observe]);

  return (
    <div className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => {
          const isVisible = visibleItems[card.id] || false;
          const buttonDuration = useMemo(() => Math.floor(Math.random() * 10000 + 10000), [card.id]);

          return (
            <div
              key={card.id}
              id={card.id}
              className={`experience-item transition-all duration-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Button
                duration={buttonDuration}
                borderRadius="1.75rem"
                className="flex-1 text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 justify-center items-center">
                  <img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="lg:w-32 md:w-20 w-16"
                  />
                  <div className="lg:ms-5">
                    <h1 className="lg:text-start text-center text-xl md:text-2xl font-bold">
                      {card.title}
                    </h1>
                    <p className="lg:text-start text-center text-white-100 mt-3 font-semibold">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;