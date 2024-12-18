import React, { useState } from "react";

function VeinColor({ onNext }) {
  const [selected, setSelected] = useState("");

  const handleSelect = (colorType) => {
    setSelected(colorType);
  };

  return (
    <div className=" flex flex-col justify-center items-center w-full max-w-full sm:max-w-[80%]  p-2 mx-auto box-border ">
      <h2 className="card-title text-center mt-2 text-md md:text-4xl sm:text-2xl mb-1 sm:mb-4">
        Choose Your Vein Color
      </h2>
      <h2 className="mb-4 text-gray-500 text-center text-sm sm:text-base">
        <span className="text-[#EE8B48] font-bold">Hint:</span> Look at the
        veins on your wrists
      </h2>

      {/* Container for the options */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-8">
        {/* Warm Option */}
        <div
          className={`box rounded-lg text-center cursor-pointer lg:w-48 w-40 py-4 flex flex-col items-center ${
            selected === "warm"
              ? "border-4 border-green-500"
              : "border border-gray-400"
          }`}
          onClick={() => handleSelect("warm")}
        >
          <h1 className="text-sm sm:text-lg font-extrabold">WARM</h1>
          <p className="-mt-1 text-xs sm:text-sm">Green veins</p>
          <div className="circle-container flex gap-2 pt-2 justify-center">
            <div className="circle w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#5E887A]"></div>
            <div className="circle w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#6E7F5C]"></div>
          </div>
        </div>

        {/* Cool Option */}
        <div
          className={`box rounded-lg text-center cursor-pointer lg:w-48 w-40 py-4 flex flex-col items-center ${
            selected === "cool"
              ? "border-4 border-blue-500"
              : "border border-gray-400"
          }`}
          onClick={() => handleSelect("cool")}
        >
          <h1 className="text-sm sm:text-lg font-extrabold">COOL</h1>
          <p className="-mt-1 text-xs sm:text-sm">Blue-green veins</p>
          <div className="circle-container flex gap-2 pt-2 justify-center">
            <div className="circle w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#728A9B]"></div>
            <div className="circle w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#539AAB]"></div>
          </div>
        </div>

        {/* Neutral Option */}
        <div
          className={`box rounded-lg text-center cursor-pointer lg:w-48 w-40 py-4 flex flex-col items-center ${
            selected === "neutral"
              ? "border-4 border-gray-500"
              : "border border-gray-400"
          }`}
          onClick={() => handleSelect("neutral")}
        >
          <h1 className="text-sm sm:text-lg font-extrabold">NEUTRAL</h1>
          <p className="-mt-1 text-xs sm:text-sm">Mixed veins</p>
          <div className="circle-container flex gap-2 pt-2 justify-center">
            <div className="circle w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#7B729B]"></div>
            <div className="circle w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#537BAB]"></div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="container-btn mt-4 sm:mt-6 w-full flex justify-center">
        <button
          onClick={() => onNext(selected)}
          className="btn hover:text-black border-none bg-[#EE8B48] text-white font-bold text-lg px-10"
          disabled={!selected}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default VeinColor;
