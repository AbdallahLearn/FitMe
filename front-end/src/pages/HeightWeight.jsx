import React, { useState } from 'react';

function HeightWeight({ onNext }) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleNext = () => {
    if (weight && height) {
      console.log("User input: Height:", height, "Weight:", weight); 
      onNext(height, weight); 
    }
  };

  return (
    <div className="card-body flex flex-col justify-center items-center w-full max-w-[80%] mx-auto">
      <h2 className="card-title w-96 text-center text-4xl max-sm:text-lg mb-6 max-sm:w-96">
        Enter Your Weight and Height
      </h2>
      <div className="container flex flex-col w-80 max-sm:w-56">
        <input
          type="number"
          required
          placeholder="Weight (kg)"
          className="input mb-8"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          required
          placeholder="Height (cm)"
          className="input mb-8"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="container-btn">
        <button
          onClick={handleNext}
          className='btn border-none bg-[#EE8B48] text-white font-bold text-2xl max-sm:text-lg'
          disabled={!weight || !height}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HeightWeight;