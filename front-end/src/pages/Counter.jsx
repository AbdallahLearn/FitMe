import React, { useState, useEffect } from "react";

function Counter({ onEnd }) {
  const [count, setCount] = useState(3); // Start from 3

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      onEnd();
    }
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="card-title text-center text-md md:text-4xl sm:text-2xl mb-6 max-sm:w-60">
        Please Wait To Generate Your Model
      </h2>

      <div
        className="text-7xl font-bold text-[#EE8B48] w-60 h-60 flex justify-center items-center rounded-full"
        style={{ border: "1px solid rgba(0,0,0,0.3)" }}
      >
        <h1>{count}</h1>
      </div>
      {count === 0 && (
        <div className="mt-4">
          <h2 className="text-2xl">Time's up!</h2>
        </div>
      )}
    </div>
  );
}

export default Counter;
