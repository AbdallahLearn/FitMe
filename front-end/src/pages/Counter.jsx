import React, { useState, useEffect } from 'react';

function Counter({ onEnd }) {
  const [count, setCount] = useState(3); // Start from 3

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000); // Decrease count every second

      return () => clearInterval(timer); // Cleanup interval on unmount
    } else {
      onEnd(); // Call the onEnd function when count reaches 0
    }
  }, [count, onEnd]);

  return (
    <div className="flex flex-col items-center justify-center h-full" >
     <h2 className="card-title text-center text-4xl max-sm:text-lg mb-6 max-sm:w-60">
     Please Wait To Generate Your Model
      </h2>
      <h1 className="text-7xl font-bold text-[#EE8B48] p-10 rounded-full" style={{border:'1px solid rgba(0,0,0,0.3)'}}>{count}</h1> {/* Display the count */}
      {count === 0 && (
        <div className="mt-4">
          <h2 className="text-2xl">Time's up!</h2>
        </div>
      )}
    </div>
  );
}

export default Counter;
