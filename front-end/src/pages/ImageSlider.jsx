import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import man from "../../public/images/modelman.png";
import girl from "../../public/images/girlmodeedit.png";

const ImageSlider = () => {
  const images = [man, girl];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:w-[24rem] lg:w-[22rem] md:w-[18rem] max-md:w-[18rem] max-sm:w-[10rem]">     
     <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt="Slideshow"
        className="w-full h-auto max-w-full object-contain rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default ImageSlider;
