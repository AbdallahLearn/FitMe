import React, { useState } from 'react';

function VeinColor({ onNext }) {
  const [selected, setSelected] = useState('');

  const handleSelect = (colorType) => {
    setSelected(colorType);
  };

  return (
    <div className="card-body flex flex-col justify-center items-center w-full max-w-[80%] mx-auto">
      <h2 className="card-title text-center text-4xl max-sm:text-lg mb-6 max-sm:w-40">
        Choose Your Vein Color:
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4">
        <div 
          className={`box p-2 rounded-lg text-center w-40 max-sm:w-full ${selected === 'warm' ? 'border-2 border-green-500' : 'border border-gray-400'}`}
          onClick={() => handleSelect('warm')}
          style={{ cursor: 'pointer' }}
        >
          <h1 className="text-lg max-sm:text-base">WARM</h1>
          <p className='pt-2'>Green veins</p>
          <div className="circle-container flex gap-2 pt-2 justify-center">
            <div className="circle w-10 h-10 rounded-full bg-[#5E887A]"></div>
            <div className="circle w-10 h-10 rounded-full bg-[#6E7F5C]"></div>
          </div>
        </div>

        <div 
          className={`box p-2 rounded-lg text-center w-40 max-sm:w-full ${selected === 'cool' ? 'border-2 border-blue-500' : 'border border-gray-400'}`}
          onClick={() => handleSelect('cool')}
          style={{ cursor: 'pointer' }}
        >
          <h1 className="text-lg max-sm:text-base">COOL</h1>
          <p className='pt-2'>Blue veins</p>
          <div className="circle-container flex gap-2 pt-2 justify-center">
            <div className="circle w-10 h-10 rounded-full bg-[#728A9B]"></div>
            <div className="circle w-10 h-10 rounded-full bg-[#539AAB]"></div>
          </div>
        </div>

        <div 
          className={`box p-2 rounded-lg text-center w-40 max-sm:w-full ${selected === 'neutral' ? 'border-2 border-gray-500' : 'border border-gray-400'}`}
          onClick={() => handleSelect('neutral')}
          style={{ cursor: 'pointer' }}
        >
          <h1 className="text-lg max-sm:text-base">NEUTRAL</h1>
          <p className='pt-2'>Mixed veins</p>
          <div className="circle-container flex gap-2 pt-2 justify-center">
            <div className="circle w-10 h-10 rounded-full bg-[#7B729B]"></div>
            <div className="circle w-10 h-10 rounded-full bg-[#537BAB]"></div>
          </div>
        </div>
      </div>
      
      <div className="container-btn mt-10 max-sm:mt-0">
        <button 
          onClick={onNext} 
          className='btn border-none bg-[#EE8B48] text-white font-bold text-2xl max-sm:text-lg' 
          disabled={!selected} // Disable if nothing is selected
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default VeinColor;
