import React from 'react';

function HeaderPhoto() {
  return (
    <div className='relative bg-[#C1B1A0]'>
      <div className='grid grid-cols-4 overflow-hidden'>
        <div className="relative">
          <img className="animate-up" src="/images/fash1.png" alt="" />
          <div className="absolute inset-0 bg-black opacity-50" /> {/* Black overlay */}
        </div>
        <div className="relative">
          <img className="animate-down" src="/images/fash2.png" alt="" />
          <div className="absolute inset-0 bg-black opacity-50" /> {/* Black overlay */}
        </div>
        <div className="relative">
          <img className="animate-up" src="/images/fash3.png" alt="" />
          <div className="absolute inset-0 bg-black opacity-50" /> {/* Black overlay */}
        </div>
        <div className="relative">
          <img className="animate-down" src="/images/fash4.png" alt="" />
          <div className="absolute inset-0 bg-black opacity-50" /> {/* Black overlay */}
        </div>
        <div className="relative">
          <img className="animate-down" src="/images/fash4.png" alt="" />
          <div className="absolute inset-0 bg-black opacity-50" /> {/* Black overlay */}
        </div>
        <div className="relative">
          <img className="animate-down" src="/images/fash3.png" alt="" />
          <div className="absolute inset-0 bg-black opacity-50" /> {/* Black overlay */}
        </div>
        <div className="relative">
          <img className="animate-down" src="/images/fash2.png" alt="" />
          <div className="absolute inset-0 bg-black opacity-50" /> {/* Black overlay */}
        </div>
        <div className="relative">
          <img className="animate-down" src="/images/fash1.png" alt="" />
          <div className="absolute inset-0 bg-black opacity-50" /> {/* Black overlay */}
        </div>
        {/* Repeat as needed */}
      </div>
    </div>
  );
}

export default HeaderPhoto;
