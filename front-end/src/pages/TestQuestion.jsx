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
import axios from "axios";

function TestQuestion() {
    // Variables //
    const id = localStorage.getItem("userId");
    const navigate = useNavigate();
    //=== Variables ===//

    // const [userDataInfo, setUserDataInfo] = useState([]);
    
    // const getPersonalData = () => {
    //     axios
    //         .get(`http://localhost:5050/models/userModel/${id}`)
    //         .then((response) => {
    //             console.log("Editing by Abdullah Jhn: ", response.data);
    //             setUserDataInfo(response.data);
    //         })
    //         .catch((error) =>
    //             console.error("Error checking model existence:", error)
    //         );
    // };

    // useEffect(() => {
    //   getPersonalData()

    //   if (
    //       userDataInfo.gender &&
    //       userDataInfo.veinsColor &&
    //       userDataInfo.skinColor &&
    //       userDataInfo.height &&
    //       userDataInfo.weight
    //   ) {
    //       navigate("/user-model", {
    //           state: {
    //               veinColor: userDataInfo.veinsColor,
    //               skinColor: userDataInfo.skinColor,
    //               gender: userDataInfo.gender,
    //               height: userDataInfo.height,
    //               weight: userDataInfo.weight,
    //           },
    //       });
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [userDataInfo, navigate]);    

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
    setUserData((prev) => ({ ...prev, gender }));
    setCurrentStep("weightAndHeight"); 
  };

  const handleNextClick = (height, weight) => {
    console.log("Selected height:", height, "Selected weight:", weight);
    setUserData((prev) => ({
      ...prev,
      height,
      weight
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
    setUserData((prev) => ({ ...prev, skinColor }));
    setCurrentStep("counter"); 
  };

  const handleCounterEnd = () => {
    console.log("Navigating to /user-model with userData:", userData);
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
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <div className="min-h-screen flex flex-col bg-[#EEE6E6]">
      <Header />

      <div className="py-28 flex-grow flex flex-col justify-center items-center">
        <div
          className="card w-[70%] h-[70vh] m-auto shadow-xl max-sm:h-[90vh] max-sm:w-[90%]"
          style={{ border: "1px solid rgba(0,0,0,0.2)" }}
        >

           {/* Previous Step button */}
           {currentStep === "start" || currentStep === "counter" ? (
            ""
          ) : (
            <div className="mt-10 ml-5 w-full">
            <button onClick={handlePreviousClick} className="z-40">
              <div className="p-1 border-2 border-[#EE8B48] rounded-xl">
                <i className="fa-solid fa-chevron-left fa-fw text-[#EE8B48] text-xl"></i>
              </div>
            </button>
          </div>
          )}

          <div className="card-body flex justify-center">
            {currentStep === "start" ? (
              <>
                <h2 className="card-title flex justify-center text-4xl max-sm:text-lg text-center">
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