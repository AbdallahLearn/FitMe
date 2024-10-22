// TestQuestion.js
import React, { useState } from "react";
import Gender from "./Gender";
import HeightWeight from "./HeightWeight";
import VeinColor from "./VeinColor";

function TestQuestion() {
  const [currentStep, setCurrentStep] = useState("start");

  const handleStartClick = () => {
    setCurrentStep("gender"); // Show the Gender component
  };

  const handleGenderSelect = (gender) => {
    console.log("Selected gender:", gender); // Log selected gender
    setCurrentStep("weightAndHeight"); // Transition to the WeightAndHeight component
  };

  const handleNextClick = () => {
    setCurrentStep("vienColor"); // Transition to the VienColor component
  };

  return (
    <div className="bg-[#EEE6E6] h-screen pt-28">
      <div className="card w-[70%] h-[70vh] m-auto shadow-xl" style={{ border: '1px solid rgba(0,0,0,0.2)' }}>
        <div className="card-body flex justify-center">
          {currentStep === "start" ? (
            <>
              <h2 className="card-title flex justify-center text-4xl max-sm:text-lg">
                Ready To Get Started?
              </h2>
              <div className="card-actions justify-end">
                <button
                  className="btn bg-[#EE8B48] m-auto mt-20 text-2xl text-white font-bold max-sm:text-sm"
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
          ) : (
            <VeinColor />
          )}
        </div>
      </div>
    </div>
  );
}

export default TestQuestion;
