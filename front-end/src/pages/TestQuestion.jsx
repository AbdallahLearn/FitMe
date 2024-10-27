import React, { useEffect, useState } from "react";
import Gender from "./Gender";
import HeightWeight from "./HeightWeight"; 
import VeinColor from "./VeinColor";
import SkinColor from "./SkinColor";
import Counter from "./Counter"; 
import Footer from "../component/Footer";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useNavigate } from "react-router";
import Header from "../component/Header";

function TestQuestion() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState("start");
  const [userData, setUserData] = useState({
    veinColor: null,
    skinColor: null,
    gender: null,
    height: null,
    weight: null, 
  });

  const [text] = useTypewriter({
    words: ["Ready To Get Started?"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const handleStartClick = () => {
    setCurrentStep("gender");
  };

  const handleGenderSelect = (gender) => {
    console.log("Selected gender:", gender);
    setUserData((prev) => ({ ...prev, gender: gender }));
    setCurrentStep("weightAndHeight"); 
  };

  const handleNextClick = (height, weight) => {
    console.log("Selected height:", height, "Selected weight:", weight);
    setUserData((prev) => ({
      ...prev,
      height: height,
      weight: weight
    }));
    setCurrentStep("veinColor"); 
  };

  const handleVeinNextClick = (color) => {
    console.log("Selected vein color:", color);
    setUserData((prev) => ({ ...prev, veinColor: color }));
    setCurrentStep("skinColor"); 
  };

  const handleSkinColorNextClick = (skinColor) => {
    console.log("Selected skin color:", skinColor);
    setUserData((prev) => ({ ...prev, skinColor: skinColor }));
    setCurrentStep("counter"); 
  };

  const handleCounterEnd = () => {
    console.log("Navigating to /user-model with userData:", userData);
    setCurrentStep("nextComponent"); 
    navigate("/user-model", {
      state: userData,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#EEE6E6]">
      <Header profile="true" />

      <div className="py-28 flex-grow flex flex-col justify-center items-center">
        <div
          className="card w-[70%] h-[70vh] m-auto shadow-xl"
          style={{ border: "1px solid rgba(0,0,0,0.2)" }}
        >
          <div className="card-body flex justify-center">
            {currentStep === "start" ? (
              <>
                <h2 className="card-title flex justify-center text-4xl max-sm:text-lg">
                  {text}
                  <Cursor />
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
              navigate("/user-model")
            )}
          </div>
        </div>

       
      </div>
      <Footer />
    </div>
  );
}

export default TestQuestion;
