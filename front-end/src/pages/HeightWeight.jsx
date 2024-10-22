import React from 'react'

function HeightWeight({onNext}) {
  return (
    <div className="card-body flex  flex-col justify-center items-center w-full max-w-[80%] mx-auto ">
      <h2 className="card-title text-center  text-4xl max-sm:text-lg mb-6 max-sm:w-40">
        Enter Your Weight and Height
      </h2>
      <div className="container flex flex-col w-80 max-sm:w-40">
      <input type="number"  placeholder="Weight (kg)" className="input mb-4" />
      <input type="number" placeholder="Height (cm)" className="input mb-4" />
      </div>
      <div className="container-btn" >
        <button  onClick={onNext}  className='btn bg-[#EE8B48] text-white font-bold text-2xl max-sm:text-lg'>Next</button>
      </div>
      
    </div>
  )
}

export default HeightWeight
