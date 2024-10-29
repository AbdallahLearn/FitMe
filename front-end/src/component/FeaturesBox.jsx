import React from "react";

function FeaturesBox({ icon, text }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-72 h-56 border border-[#B3ADAD] rounded-md bg-white shadow-[0px_3px_10px_1px_rgba(0,0,0,0.3)]">
      {icon}
      <p className="text-center font-bold w-[80%]">{text}</p>
    </div>
  );
}

export default FeaturesBox;
