import React from "react";

function Gender({ onSelect }) {
  return (
    <div className="card-body flex flex-col justify-center items-center w-full max-w-full sm:max-w-[80%] mx-auto p-2 sm:p-6 box-border">
      <h2 className="card-title text-2xl sm:text-4xl text-center mb-4">
        Choose Your Gender
      </h2>
      <div className="card-actions w-full sm:w-96 flex justify-around flex-wrap gap-4">
        <div className="img-container flex flex-col items-center w-1/2 sm:w-40">
          <div className="img w-20 h-24 sm:w-32 sm:h-40">
            <img src="./public/images/male.png" alt="Male" className="w-full h-full object-cover"/>
          </div>
          <button
            className="btn bg-[#EE8B48] text-lg sm:text-2xl border-none text-white font-bold w-full mt-2"
            onClick={() => onSelect("Male")}
          >
            Male
          </button>
        </div>

        <div className="img-container flex flex-col items-center w-1/2 sm:w-40">
          <div className="img w-20 h-24 sm:w-32 sm:h-40">
            <img src="./public/images/female.png" alt="Female" className="w-full h-full object-cover"/>
          </div>
          <button
            className="btn bg-[#EE8B48] text-lg sm:text-2xl border-none text-white font-bold w-full mt-2"
            onClick={() => onSelect("Female")}
          >
            Female
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gender;
