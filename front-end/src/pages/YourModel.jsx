import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../App.css";
import man from "../assets/man.png"; 

function YourModel() {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 flex-col gap-4 sm:gap-6 overflow-y-auto bg-[#EEE6E6] px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="text-4xl font-extrabold text-[#EE8B48]">Your Model</div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="flex basis-full lg:basis-2/3 flex-col gap-6 sm:gap-8">
            <div className="gap-4 flex flex-col border-gray-400 rounded-xl border p-4 sm:p-6 md:p-8 shadow-lg shadow-gray-300">
              {[
                "Clicks on the clothing piece to change its color",
                "Choose the color you want",
              ].map((step, i, arr) => (
                <div key={i} className="flex flex-row items-center gap-4">
                  <span
                    className="text-[#EE8B48] h-8 w-8 sm:h-10 sm:w-10 font-bold rounded-full border-2 border-[#EE8B48] text-lg sm:text-xl place-items-center grid bg-[#EEE6E6] relative"
                    style={{ zIndex: arr.length - i }}
                  >
                    {i !== 0 && (
                      <span className="w-[1px] h-6 sm:h-8 bg-[#EE8B48] absolute translate-y-[-100%] top-0 right-1/2 translate-x-1/2"></span>
                    )}
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 border-gray-400 rounded-xl border p-4 shadow-lg shadow-gray-300 gap-4 items-center justify-center">
              {new Array(15).fill(0).map((_, i) => (
                <div className="flex justify-center items-center" key={i}>
                  <span
                    className="rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 border-black"
                    style={{
                      backgroundColor: `#${Math.floor(Math.sin(i) * 128 + 128)
                          .toString(16)
                          .padStart(2, "0")}${Math.floor(Math.cos(i) * 128 + 128)
                          .toString(16)
                          .padStart(2, "0")}${Math.floor(Math.sin(i) * 128 + 128)
                          .toString(16)
                          .padStart(2, "0")}`,
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="gap-4 flex flex-col border-gray-400 rounded-xl border p-4 sm:p-6 md:p-8 shadow-lg shadow-gray-300">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#EE8B48]">
                Some Advice
              </div>
              {[
                "1. Skip the vertical stripes, because it will make you appear taller than you are.",
                "2. Avoid wearing too-tight jeans.",
                "3. Playing with different textures, colors, and patterns on your upper and lower body will break up your tall.",
              ].map((advice, index) => (
                <span key={index} className="text-sm sm:text-base md:text-lg font-semibold">
                  {advice}
                </span>
              ))}
            </div>
          </div>

          <div className="flex basis-full lg:basis-1/3 flex-col border rounded-lg border-gray-400 p-6 sm:p-8 md:p-10 shadow-lg shadow-gray-300 justify-center items-center h-full">
            <img src={man} className="w-full sm:w-3/4 lg:w-3/4" alt="Model" /> 
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default YourModel;
