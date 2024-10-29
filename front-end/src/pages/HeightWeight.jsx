import React, { useState } from "react";

function HeightWeight({ onNext }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleNext = () => {
    if (weight && height) {
      // console.log("User input: Height:", height, "Weight:", weight);
      onNext(height, weight);
    }
  };

  return (
    <div className="card-body relative flex flex-col justify-center items-center w-full  mx-auto p-2 sm:p-6 box-border">
      <h2 className="card-title text-center text-md md:text-4xl sm:text-2xl mb-4 mt-2 leading-tight whitespace-nowrap">
        Enter Your Weight and Height
      </h2>

      <div className="container flex flex-col w-80 max-sm:w-56">
      <input
  type="number"
  required
  placeholder="Weight (10 - 300 kg)"
  className="input mb-6 sm:mb-6"
  value={weight}
  min="10"
  max="300"
  onChange={(e) => setWeight(e.target.value)}
/>
<input
  type="number"
  required
  placeholder="Height (70 - 250 cm)"
  className="input mb-4 sm:mb-6"
  value={height}
  min="70"
  max="250"
  onChange={(e) => setHeight(e.target.value)}
/>
      </div>

      <div className="container-btn flex justify-center w-full mt-4">
        <button
          onClick={handleNext}
          className="btn hover:text-black border-none bg-[#EE8B48] text-white font-bold text-lg px-10"
          disabled={!weight || !height || weight< 9 || weight> 300 || height< 69 || height >250}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HeightWeight;
