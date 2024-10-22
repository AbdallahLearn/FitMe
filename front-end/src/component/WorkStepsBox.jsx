import React from "react";

function WorkStepsBox({ step, title, desc }) {
  return (
    <div className="flex flex-col justify-center items-center  lg:w-60 w-40">
      <div className="flex flex-col justify-center items-center w-48">
        <div className="w-14 h-14 rounded-lg bg-[#EE8B48] text-white text-xl font-bold flex justify-center items-center">
          {step}
        </div>
        <p className="font-bold text-xl pt-4">{title}</p>        
      </div>
      <p className="text-center md:w-60">{desc}</p>
    </div>
  );
}

export default WorkStepsBox;
