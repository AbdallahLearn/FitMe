import React, { useState } from 'react';

function SkinColor({ onNext }) {  // Accept onPrevious as a prop
  const [selectedColor, setSelectedColor] = useState(null);

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
    <div className=" flex flex-col justify-center items-center w-full max-w-full sm:max-w-[80%]  p-2 mx-auto box-border ">
      <h2 className="card-title text-center md:text-4xl mt-2 mb-2 sm:mb-4">
        Choose Your Skin Color:
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className="box rounded-lg text-center cursor-pointer p-2 flex flex-col items-center"
            onClick={() => handleSelect(color)}
          >
            <h1 className="text-sm sm:text-lg mb-1">{color.name}</h1>
            <div
              className={`circle w-16 h-16 sm:w-20 sm:h-20 rounded-lg transition-all duration-300 ${
                selectedColor?.name === color.name ? 'border-4 border-blue-500' : ''
              }`}
              style={{
                backgroundColor: color.code,
                border: selectedColor?.name === color.name
                  ? '4px solid #EE8B48'
                  : '1px solid rgba(0,0,0,0.3)',
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="container-btn mt-4 sm:mt-6 w-full flex justify-center">
        <button
          className="btn border-none bg-[#EE8B48] text-white font-bold text-lg sm:text-2xl px-6 py-3 max-sm:px-4 max-sm:py-2"
          onClick={() => onNext(selectedColor)}
          disabled={!selectedColor}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SkinColor;
