import React, { useState } from "react";
import Gender from "./Gender";
import HeightWeight from "./HeightWeight";
import VeinColor from "./VeinColor";
import SkinColor from "./SkinColor";
import Counter from "./Counter"; // Import the Counter component
import EditModel from "./EditModel";
import Footer from "../component/Footer";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function TestQuestion() {
  const [currentStep, setCurrentStep] = useState("start");

  // Set up the typewriter effect
  const [text] = useTypewriter({
    words: ['Ready To Get Started?'],
    loop: 0, // Change to a number for a specific number of loops or set to 0 for infinite
    typeSpeed: 100, // Speed of typing in ms
    deleteSpeed: 50, // Speed of deleting in ms (if looping)
    delaySpeed: 1000, // Delay before deleting
  });

  const handleStartClick = () => {
    setCurrentStep("gender"); // Show the Gender component
  };

  const handleGenderSelect = (gender) => {
    console.log("Selected gender:", gender); // Log selected gender
    setCurrentStep("weightAndHeight"); // Transition to the WeightAndHeight component
  };

  const handleNextClick = () => {
    setCurrentStep("veinColor"); // Transition to the VeinColor component
  };

  const handleVeinNextClick = () => {
    setCurrentStep("skinColor"); // Transition to the SkinColor component
  };

  const handleSkinColorNextClick = () => {
    setCurrentStep("counter"); // Transition to the Counter component
  };

  const handleCounterEnd = () => {
    setCurrentStep("nextComponent"); // Transition to the desired next component
  };

  return (
    <div className="bg-[#EEE6E6] h-screen pt-28">
      <div className="card w-[70%] h-[70vh] m-auto shadow-xl" style={{ border: '1px solid rgba(0,0,0,0.2)' }}>
        <div className="card-body flex justify-center">
          {currentStep === "start" ? (
            <>
              <h2 className="card-title flex justify-center text-4xl max-sm:text-lg">
                {text} {/* Display the typewriter text */}
                <Cursor /> {/* Display the cursor */}
              </h2>
              <div className="card-actions justify-end">
                <button
                  className="btn bg-[#EE8B48] border-none m-auto mt-20 text-2xl text-white font-bold max-sm:text-sm"
                  onClick={handleStartClick}
                >
                  Start
                </button>
              </div>
            </>
          ) : currentStep === "gender" ? (
            <Gender onSelect={handleGenderSelect} />
          ) : currentStep === "weightAndHeight" ? (
            <HeightWeight onNext={handleNextClick} />
          ) : currentStep === "veinColor" ? (
            <VeinColor onNext={handleVeinNextClick} />
          ) : currentStep === "skinColor" ? (
            <SkinColor onNext={handleSkinColorNextClick} />
          ) : currentStep === "counter" ? (
            <Counter onEnd={handleCounterEnd} />
          ) : (
            <EditModel />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TestQuestion;
