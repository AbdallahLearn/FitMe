import React, { useState } from 'react';

function HeightWeight({ onNext, onPrevious }) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleNext = () => {
    if (weight && height) {
      console.log("User input: Height:", height, "Weight:", weight); 
      onNext(height, weight); 
    }
  };

  return (
    <div className="card-body relative flex flex-col justify-center items-center w-full max-w-full sm:max-w-[80%] mx-auto p-2 sm:p-6 box-border">
      
      {/* Previous Step button */}
      <div className="w-full mt-4 flex justify-center lg:justify-start">
        <button onClick={onPrevious} className="z-40">
          <div className="p-1 border-2 border-[#EE8B48] rounded-xl">
            <i className="fa-solid fa-chevron-left fa-fw text-[#EE8B48] text-xl"></i>
          </div>
        </button>
      </div>
      
      <h2 className="card-title text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl mb-4 leading-tight whitespace-nowrap">
        Enter Your Weight and Height
      </h2>

      <div className="container flex flex-col w-80 max-sm:w-56">
        <input
          type="number"
          required
          placeholder="Weight (kg)"
          className="input mb-4 sm:mb-6"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          required
          placeholder="Height (cm)"
          className="input mb-4 sm:mb-6"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <div className="container-btn flex justify-center w-full mt-4">
        <button
          onClick={handleNext}
          className='btn border-none bg-[#EE8B48] text-white font-bold text-2xl max-sm:text-lg py-2 px-4'
          disabled={!weight || !height}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HeightWeight;