import React from 'react';

function SkinColor({ onNext }) { // Accept onNext as a prop
  return (
    <div className="card-body flex flex-col justify-center items-center w-full max-w-[100%] mx-auto">
      <h2 className="card-title text-center text-4xl max-sm:text-lg mb-6 max-sm:w-40">
        Choose Your Skin Color:
      </h2>
      <div className="grid grid-cols-6 max-md:grid-cols-3 gap-4 max-sm:grid-cols-2">
        {/* Color boxes */}
        <div className="box rounded-lg text-center">
          <h1 className="text-lg max-sm:text-base">Fair</h1>
          <div className="circle-container flex justify-center pt-2">
            <div className="circle w-20 h-20 rounded-lg bg-[#F4E0D9]" style={{border:'1px solid rgba(0,0,0,0.3)'}}></div>
          </div>
        </div>
        <div className="box rounded-lg text-center">
          <h1 className="text-lg max-sm:text-base">Light</h1>
          <div className="circle-container flex justify-center pt-2">
            <div className="circle w-20 h-20 rounded-lg bg-[#F5DEC4]" style={{border:'1px solid rgba(0,0,0,0.3)'}}></div>
          </div>
        </div>
        <div className="box rounded-lg text-center">
          <h1 className="text-lg max-sm:text-base">Medium</h1>
          <div className="circle-container flex justify-center pt-2">
            <div className="circle w-20 h-20 rounded-lg bg-[#E3BA9F]" style={{border:'1px solid rgba(0,0,0,0.3)'}}></div>
          </div>
        </div>
        <div className="box rounded-lg text-center">
          <h1 className="text-lg max-sm:text-base">Tan</h1>
          <div className="circle-container flex justify-center pt-2">
            <div className="circle w-20 h-20 rounded-lg bg-[#C88F71]" style={{border:'1px solid rgba(0,0,0,0.3)'}}></div>
          </div>
        </div>
        <div className="box rounded-lg text-center">
          <h1 className="text-lg max-sm:text-base">Dark</h1>
          <div className="circle-container flex justify-center pt-2">
            <div className="circle w-20 h-20 rounded-lg bg-[#74504F]" style={{border:'1px solid rgba(0,0,0,0.3)'}}></div>
          </div>
        </div>
        <div className="box rounded-lg text-center">
          <h1 className="text-lg max-sm:text-base">Deep</h1>
          <div className="circle-container flex justify-center pt-2">
            <div className="circle w-20 h-20 rounded-lg bg-[#493338]" style={{border:'1px solid rgba(0,0,0,0.3)'}}></div>
          </div>
        </div>
      </div>
      <div className="container-btn mt-10">
        <button className='btn bg-[#EE8B48] text-white font-bold text-2xl max-sm:text-lg' onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default SkinColor;
