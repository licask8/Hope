import React from 'react';

// import data
import { environment } from '../data';

// import components
import EnvironmentSlider from './EnvironmentSlider';

const Environment = () => {
  // destructure community data
  const { icon, title, testimonials } = environment;
  return (
    <section id="profissionais" className='section relative mt-96 md:mt-24'>
      <div className='container mx-auto'>
        <div className='flex'>
          {/* section title */}
          <div
            className='section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto'
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='200'
          >
            <img src={icon} alt='' />
            <h2 className='h2 section-title'>
              {title} <span className='text-primary-200'>.</span>
            </h2>
          </div>
          {/* slider */}
          <div
            className='absolute -right-[375px] lg:-right-[280px] w-[1140px] top-48 lg:top-0'
            data-aos='fade-left'
            data-aos-offset='200'
            data-aos-delay='300'
          >
            <EnvironmentSlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Environment;
