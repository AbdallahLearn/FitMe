import React from "react";
import { Link } from "react-router-dom";

function Gender({ onSelect, onNext }) {
  return (
    <div className="card-body relative flex flex-col justify-center items-center w-full max-w-full sm:max-w-[80%] mx-auto p-2 sm:p-6 box-border">
      
      {/* Back button */}
      <Link
        to="/generate-model"
        className="absolute top-4 left-4 flex items-center bg-transparent border-2 border-[#EE8B48] text-[#EE8B48] px-4 py-2 rounded-lg font-bold"
      >
        <span className="mr-2">←</span> {/* Left arrow */}
        Back
      </Link>
      
      <h2 className="card-title text-2xl sm:text-4xl text-center mb-4">
        Choose Your Gender
      </h2>
      <div className="card-actions w-full sm:w-96 flex justify-around flex-wrap gap-16">
        
        {/* Male option */}
        <div className="img-container flex flex-col items-center w-1/2 sm:w-40">
          <div className="img w-20 h-24 sm:w-32 sm:h-40">
            <img src="/images/male.png" alt="Male" className="w-full h-full object-cover"/>
          </div>
          <button
            className="btn bg-[#EE8B48] text-lg sm:text-2xl border-none text-white font-bold w-full mt-2"
            onClick={() => {
              onSelect("Male");
              onNext(); // Call the onNext prop to go to the next step
            }}
          >
            Male
          </button>
        </div>

        {/* Female option */}
        <div className="img-container flex flex-col items-center w-1/2 sm:w-40">
          <div className="img w-20 h-24 sm:w-32 sm:h-40">
            <img src="/images/female.png" alt="Female" className="w-full h-full object-cover"/>
          </div>
          <button
            className="btn bg-[#EE8B48] text-lg sm:text-2xl border-none text-white font-bold w-full mt-2"
            onClick={() => {
              onSelect("Female");
              onNext(); // Call the onNext prop to go to the next step
            }}
          >
            Female
          </button>
        </div>
      </div>
      
      {/* Next button */}
      <Link
        to="/generate-model"
        className="mt-8 px-6 py-3 bg-[#EE8B48] text-white text-lg sm:text-xl font-bold rounded-lg"
      >
        Next
      </Link>
    </div>
  );
}

export default Gender;
