import React, { useEffect, useState } from 'react';

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 50; // typing speed in milliseconds

  useEffect(() => {
    console.log("Received text:", text); // Log the received text
    if (!text) return; // Exit if text is not provided

    let index = 0;

    const type = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        setTimeout(type, typingSpeed);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 200; // Trigger position

      if (scrollPosition > triggerPosition) {
        type();
        window.removeEventListener('scroll', handleScroll); // Remove event after typing
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event
    };
  }, [text]);

  return <h2>{displayedText}</h2>;
};

export default TypingText;
