import React, { useState } from 'react';

function VeinColor({ onNext }) {
  const [selected, setSelected] = useState('');

  const handleSelect = (colorType) => {
    setSelected(colorType);
  };

  return (
    <div className="card-body flex flex-col justify-center items-center w-full max-w-full sm:max-w-[80%] h-auto sm:h-96 mx-auto p-4 box-border">
      <h2 className="card-title text-center text-2xl sm:text-4xl mb-1 sm:mb-4">
        Choose Your Vein Color:
      </h2>
      <h2 className='mb-4 text-gray-500 text-center max-sm:text-[0.8rem]'><span className=' text-[#EE8B48] font-bold'>Hint:</span> Look at the veins on your wrists</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div 
          className={`box rounded-lg text-center cursor-pointer px-4 p-2 flex flex-col items-center ${selected === 'warm' ? 'border-4 border-green-500' : 'border border-gray-400'}`}
          onClick={() => handleSelect('warm')}
        >
          <h1 className="text-base sm:text-lg">WARM</h1>
          <p className="pt-1 sm:pt-2 text-xs sm:text-sm">Green veins</p>
          <div className="circle-container flex gap-2 pt-2 justify-center">
            <div className="circle w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#5E887A]"></div>
            <div className="circle w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#6E7F5C]"></div>
          </div>
        </div>

        <div 
          className={`box rounded-lg text-center cursor-pointer px-4 p-2 flex flex-col items-center ${selected === 'cool' ? 'border-4 border-blue-500' : 'border border-gray-400'}`}
          onClick={() => handleSelect('cool')}
        >
          <h1 className="text-base sm:text-lg">COOL</h1>
          <p className="pt-1 sm:pt-2 text-xs sm:text-sm">Blue veins</p>
          <div className="circle-container flex gap-2 pt-2 justify-center">
            <div className="circle w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#728A9B]"></div>
            <div className="circle w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#539AAB]"></div>
          </div>
        </div>

        <div 
          className={`box rounded-lg text-center cursor-pointer px-4 p-2 flex flex-col items-center ${selected === 'neutral' ? 'border-4 border-gray-500' : 'border border-gray-400'}`}
          onClick={() => handleSelect('neutral')}
        >
          <h1 className="text-base sm:text-lg">NEUTRAL</h1>
          <p className="pt-1 sm:pt-2 text-xs sm:text-sm">Mixed veins</p>
          <div className="circle-container flex gap-2 pt-2 justify-center">
            <div className="circle w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#7B729B]"></div>
            <div className="circle w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#537BAB]"></div>
          </div>
        </div>
      </div>

      <div className="container-btn mt-4 sm:mt-6 w-full flex justify-center">
        <button 
          onClick={() => onNext(selected)}
          className="btn border-none bg-[#EE8B48] text-white font-bold text-sm sm:text-2xl py-2 px-4 max-sm:px-4 max-sm:py-2"
          disabled={!selected} 
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default VeinColor;
