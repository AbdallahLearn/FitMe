import React from 'react';

function VeinColor() {
  return (
    <div className="card-body flex flex-col justify-center items-center w-full max-w-[80%] mx-auto">
      <h2 className="card-title text-center text-4xl max-sm:text-lg mb-6 max-sm:w-40">
        Choose Your Veins Color:
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4">
        <div className="box p-4 rounded-lg text-center w-40 max-sm:w-full" style={{ border: '1px solid rgba(0,0,0,0.5)' }}>
          <h1 className="text-lg max-sm:text-base">WARM</h1>
          <p className='pt-2'>Green veins</p>
          <div className="circle-container flex gap-2 pt-2 justify-center">
            <div className="circle w-10 h-10 rounded-full bg-[#5E887A] max-sm:w-10 max-sm:h-10"></div>
            <div className="circle w-10 h-10 rounded-full bg-[#6E7F5C] max-sm:w-10 max-sm:h-10"></div>
          </div>
        </div>

        <div className="box p-4 rounded-lg text-center w-40 max-sm:w-full" style={{ border: '1px solid rgba(0,0,0,0.5)' }}>
          <h1 className="text-lg max-sm:text-base">COOL</h1>
          <p className='pt-2'>Blue veins</p>
          <div className="circle-container flex gap-2 pt-2 justify-center">
            <div className="circle w-10 h-10 rounded-full bg-[#728A9B] max-sm:w-10 max-sm:h-10"></div>
            <div className="circle w-10 h-10 rounded-full bg-[#539AAB] max-sm:w-10 max-sm:h-10"></div>
          </div>
        </div>

        <div className="box p-4 rounded-lg text-center w-40 max-sm:w-full" style={{ border: '1px solid rgba(0,0,0,0.5)' }}>
          <h1 className="text-lg max-sm:text-base">NEUTRAL</h1>
          <p className='pt-2'>Mixed veins</p>
          <div className="circle-container flex gap-2 pt-2 justify-center">
            <div className="circle w-10 h-10 rounded-full bg-[#7B729B] max-sm:w-10 max-sm:h-10"></div>
            <div className="circle w-10 h-10 rounded-full bg-[#537BAB] max-sm:w-10 max-sm:h-10"></div>
          </div>
        </div>
      </div>
      <div className="container-btn mt-10" >
        <button  className='btn bg-[#EE8B48] text-white font-bold text-2xl max-sm:text-lg'>Next</button>
      </div>
    </div>
  );
}

export default VeinColor;
