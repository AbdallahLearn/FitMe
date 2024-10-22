// Gender.js
import React from "react";

function Gender({ onSelect }) {
  return (
    <div className="card-body flex flex-col justify-center items-center w-full max-w-[80%] mx-auto">
      <h2 className="card-title text-4xl max-sm:text-lg mb-6 max-sm:w-40">
        Choose Your Gender
      </h2>
      <div className="card-actions w-96 justify-around flex-wrap">
        <div className="img-container flex flex-col items-center max-sm:w-1/2">
          <div className="img w-32 max-sm:w-20">
            <img src="./public/images/male.png" alt="Male" />
          </div>
          <button
            className="btn bg-[#EE8B48] text-2xl text-white font-bold max-sm:text-sm w-full"
            onClick={() => onSelect("Male")} // Trigger onSelect for Male
          >
            Male
          </button>
        </div>

        <div className="img-container flex flex-col items-center max-sm:w-1/2">
          <div className="img w-32 max-sm:w-20">
            <img src="./public/images/female.png" alt="Female" />
          </div>
          <button
            className="btn bg-[#EE8B48] text-2xl text-white font-bold max-sm:text-sm w-full"
            onClick={() => onSelect("Female")} // Trigger onSelect for Female
          >
            Female
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gender;
