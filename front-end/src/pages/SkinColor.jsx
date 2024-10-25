import React, { useState } from 'react';

function SkinColor({ onNext }) {
  const [selectedColor, setSelectedColor] = useState('');

  const handleSelect = (color) => {
    setSelectedColor(color);
  };

  const colors = [
    { name: 'Fair', code: '#F4E0D9' },
    { name: 'Light', code: '#F5DEC4' },
    { name: 'Medium', code: '#E3BA9F' },
    { name: 'Tan', code: '#C88F71' },
    { name: 'Dark', code: '#74504F' },
    { name: 'Deep', code: '#493338' },
  ];

  return (
    <div className="card-body flex flex-col justify-center items-center w-full max-w-[100%] mx-auto">
      <h2 className="card-title text-center text-4xl max-sm:text-lg mb-6 max-sm:w-40">
        Choose Your Skin Color:
      </h2>
      <div className="grid grid-cols-6 max-md:grid-cols-3 gap-4 max-sm:grid-cols-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`relative box rounded-lg text-center cursor-pointer`}
            onClick={() => handleSelect(color)}
          >
            <h1 className="text-lg max-sm:text-base mb-2">{color.name}</h1>
            <div
              className={`circle w-20 h-20 rounded-lg transition-all duration-300 ${
                selectedColor.name === color.name ? 'border-4 border-blue-500' : ''
              }`}
              style={{
                backgroundColor: color.code,
                border: selectedColor.name === color.name 
                  ? '4px solid #EE8B48' // Change to your preferred color
                  : '1px solid rgba(0,0,0,0.3)',
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="container-btn mt-10">
        <button
          className='btn border-none bg-[#EE8B48] text-white font-bold text-2xl max-sm:text-lg'
          onClick={() => onNext(selectedColor.code)}
          disabled={!selectedColor} // Disable button if no color is selected
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SkinColor;
