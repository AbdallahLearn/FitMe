import React from 'react';

function HeaderPhoto() {
  return (
    <div className='relative bg-[#C1B1A0]'>
      <div className='grid grid-cols-4 overflow-hidden max-md:grid-cols-3 max-sm:grid-cols-2'>
        {/* First Row - Images moving up */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            className={`relative border border-black animate-${index % 2 === 0 ? 'up' : 'down'}`} 
            key={index}
          >
            <img
              src={`/images/fash${(index % 4) + 1}.png`}
              alt={`Fashion ${index + 1}`}
              className="m-auto h-full object-cover w-[70%]"
            />
            <div className="absolute inset-0 bg-black opacity-50" /> 
          </div>
        ))}
        {/* Second Row - Images moving down */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            className={`relative border border-black animate-${(index + 4) % 2 === 0 ? 'up' : 'down'}`} 
            key={index + 4}
          >
            <img
              src={`/images/fash${(index % 4) + 1}.png`}
              alt={`Fashion ${index + 5}`}
              className="m-auto h-full object-cover w-[70%]"
            />
            <div className="absolute inset-0 bg-black opacity-50" /> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderPhoto;
