import React, { useState } from 'react';

// import icons
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  // destructure accordion
  const { question, answer } = accordion;
  return (
    <div onClick={() => setIsOpen(!isOpen)} className=' cursor-pointer'>
      <div className='bg-white border rounded-sm'>
        <div className='min-h-[68px] flex items-center justify-between px-[30px]'>
          <h6 className='h6'>{question}</h6>
          <div>
            {isOpen ? (
              <FaChevronCircleUp className='text-[20px] text-neutral-500' />
            ) : (
              <FaChevronCircleDown className='text-[20px] text-neutral-500' />
            )}
          </div>
        </div>
        <div
          className={`${
            isOpen ? 'min-h-[100px] lg:min-h-[60px]' : 'min-h-0'
          } max-h-0 overflow-hidden flex justify-center transition-all px-[15px]`}
        >
          <div className='mt-1'>{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
