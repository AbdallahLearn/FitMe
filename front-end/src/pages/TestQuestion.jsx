import { useEffect, useState } from "react";
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
    // Variables //
    const id = localStorage.getItem("userId");
    const navigate = useNavigate();
    //=== Variables ===//

       

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
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const handleStartClick = () => {
    setCurrentStep("gender");
  };

  const handleGenderSelect = (gender) => {
    // console.log("Selected gender:", gender);
    setUserData((prev) => ({ ...prev, gender }));
    setCurrentStep("weightAndHeight"); 
  };

  const handleNextClick = (height, weight) => {
    // console.log("Selected height:", height, "Selected weight:", weight);
    setUserData((prev) => ({
      ...prev,
      height,
      weight
    }));
    setCurrentStep("veinColor"); 
  };

  const handleVeinNextClick = (color) => {
    // console.log("Selected vein color:", color);
    setUserData((prev) => ({ ...prev, veinColor: color }));
    setCurrentStep("skinColor"); 
  };

  const handleSkinColorNextClick = (skinColor) => {
    // console.log("Selected skin color:", skinColor);
    setUserData((prev) => ({ ...prev, skinColor }));
    setCurrentStep("counter"); 
  };

  const handleCounterEnd = () => {
    // console.log("Navigating to /user-model with userData:", userData);
    navigate("/user-model", {
      state: userData,
    });
  };

  const handlePreviousClick = () => {
    switch (currentStep) {
      case "gender":
        setCurrentStep("start");
        break;
      case "weightAndHeight":
        setCurrentStep("gender");
        break;
      case "veinColor":
        setCurrentStep("weightAndHeight");
        break;
      case "skinColor":
        setCurrentStep("veinColor");
        break;
      case "counter":
        setCurrentStep("skinColor");
        break;
      default:
        setCurrentStep("start");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userId") === null) {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <div className="min-h-screen flex flex-col bg-[#EEE6E6]">
      <Header />

      <div className="py-28 flex-grow flex flex-col justify-center items-center">
        <div
          className="card w-[70%] h-[75vh] m-auto shadow-xl max-sm:h-[90vh] max-sm:w-[90%]"
          style={{ border: "1px solid rgba(0,0,0,0.2)" }}
        >

           {/* Previous Step button */}
           {currentStep === "start" || currentStep === "counter" ? (
            ""
          ) : (
            <div className="mt-10 ml-5 w-full">
            <button onClick={handlePreviousClick} className="z-40">
                <i className="fa-solid fa-chevron-left rounded-xl w-10   fa-fw p-1 border-2 border-[#EE8B48] text-[#EE8B48]  hover:text-white  hover:bg-[#EE8B48]  text-xl"></i>
            </button>
          </div>
          )}

          <div className="card-body flex justify-center pt-0">
            {currentStep === "start" ? (
              <>
                <h2 className="card-title flex justify-center text-4xl max-sm:text-lg text-center">
                  {text}
                  <Cursor />
                </h2>
                <div className="card-actions justify-end">
                  <button
                    className="btn bg-[#EE8B48] hover:text-black px-16 flex justify-center items-center border-none m-auto mt-20 text-2xl text-white font-bold max-sm:mt-8 max-sm:text-sm"
                    onClick={handleStartClick}
                  >
                    Start
                  </button>
                </div>
              </>
            ) : currentStep === "gender" ? (

              <Gender 
                onSelect={handleGenderSelect} 
                onPrevious={handlePreviousClick}
              />
            ) : currentStep === "weightAndHeight" ? (
              <HeightWeight onNext={handleNextClick} onPrevious={handlePreviousClick} />
            ) : currentStep === "veinColor" ? (
              <VeinColor onNext={handleVeinNextClick} onPrevious={handlePreviousClick} />
            ) : currentStep === "skinColor" ? (
              <SkinColor onNext={handleSkinColorNextClick} veinColor={userData.veinColor} />
            ) : currentStep === "counter" ? (
              <Counter onEnd={handleCounterEnd} onPrevious={handlePreviousClick} />
            ) : null}
          </div>
           
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default TestQuestion;