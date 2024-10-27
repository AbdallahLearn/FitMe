import React from "react";

function Gender({ onSelect, onNext, onPrevious }) {
  return (
    <div className="card-body relative flex flex-col justify-center items-center w-full max-w-full sm:max-w-[80%] mx-auto p-2 sm:p-6 box-border">
      
{/* Previous Step button */}
<div className="w-full mt-4 flex justify-center lg:justify-start  mb-5">
  <button onClick={onPrevious} className="z-40">
    <div className="p-1 border-2 border-[#EE8B48] rounded-xl">
      <i className="fa-solid fa-chevron-left fa-fw text-[#EE8B48] text-xl"></i>
    </div>
  </button>
</div>


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
              onNext();
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
              onNext();
            }}
          >
            Female
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gender;