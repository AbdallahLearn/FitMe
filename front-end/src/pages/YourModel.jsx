import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../App.css";
import ManSvg from "../svg-component/ManSvg";
import axios from "axios";
import GirlSvg from "../svg-component/GirlSvg";
import ManSvg2 from "../svg-component/ManSvg2";
import ManSvg3 from "../svg-component/ManSvg3";
import GirlSvg2 from "../svg-component/GirlSvg2";
import GirlSvg3 from "../svg-component/GirlSvg3";

function YourModel() {
    const [suggestions, setSuggestions] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [colorMap, setColorMap] = useState({
        '1': 'gray',
        '2': '#C88F71',
        '3': 'gray',
        '4': 'gray',
        '5': 'gray',
        '6': 'gray',
        '7': 'gray',
        '8': 'gray',
        '9': 'gray',
        '10': 'gray'
    });
    const [selectedPath, setSelectedPath] = useState(null);
    const [styleAdvice, setStyleAdvice] = useState([]); 

    useEffect(() => {
        fetchColorSuggestions();
        fetchStyleAdvice(); 
    }, []);

    const fetchColorSuggestions = () => {
        setLoading(true);
        setError('');

        axios.post('http://localhost:5000/api/chatgpt-suggest-colors')
            .then((response) => {
                const colorData = response.data.suggestions; 
                const parsedColorData = JSON.parse(colorData);
                setSuggestions(parsedColorData);
            })
            .catch((error) => {
                console.error('Error fetching color suggestions:', error.response ? error.response.data : error.message);
                setError('Failed to fetch color suggestions. Please try again.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const fetchStyleAdvice = () => {
      
        const weight = 70;
        const height = 175; 
        const veinColor = 'blue'; 

        setLoading(true);
        setError('');

        axios.post('http://localhost:5000/api/chatgpt-style-advice', { weight, height, veinColor })
            .then((response) => {
                setStyleAdvice(response.data.advice.split('\n')); 
            })
            .catch((error) => {
                console.error('Error fetching style advice:', error.response ? error.response.data : error.message);
                setError('Failed to fetch style advice. Please try again.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handlePathClick = (id) => {
        setSelectedPath(id);
    };

    const handleColorChange = (color) => {
        if (selectedPath) {
            setColorMap((prev) => ({
                ...prev,
                [selectedPath]: color,
            }));
            setSelectedPath(null); 
        }
    };

    return (
        <div className="flex flex-1 flex-col gap-4 sm:gap-6 overflow-y-visible bg-[#EEE6E6]">
            <Header profile="true" />

            <div className="flex flex-1 flex-col gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
                <div className="text-4xl font-extrabold text-[#EE8B48]">Your Model</div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    <div className="flex basis-full lg:basis-2/3 flex-col gap-6 sm:gap-8">
                        <div className="gap-4 flex flex-col border-gray-400 rounded-xl border p-4 sm:p-6 md:p-8 shadow-lg shadow-gray-300">
                            {[
                                "Click on the clothing piece to change its color",
                                "Choose the color you want",
                            ].map((step, i, arr) => (
                                <div key={i} className="flex flex-row items-center gap-4">
                                    <span
                                        className="text-[#EE8B48] h-8 w-8 sm:h-10 sm:w-10 font-bold rounded-full border-2 border-[#EE8B48] text-lg sm:text-xl place-items-center grid bg-[#EEE6E6] relative"
                                        style={{ zIndex: arr.length - i }}
                                    >
                                        {i !== 0 && (
                                            <span className="w-[1px] h-6 sm:h-8 bg-[#EE8B48] absolute translate-y-[-100%] top-0 right-1/2 translate-x-1/2"></span>
                                        )}
                                        {(i + 1).toString().padStart(2, "0")}
                                    </span>
                                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                                        {step}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 border-gray-400 rounded-xl border p-4 shadow-lg shadow-gray-300 gap-4 items-center justify-center">
                            {loading && <p>Loading...</p>}
                            {error && <p>{error}</p>}
                            {Object.entries(suggestions).slice(0, 15).map(([key, color]) => (
                                <div className="flex justify-center items-center" key={key}>
                                    <span
                                        className="rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 border-black cursor-pointer"
                                        style={{
                                            backgroundColor: color,
                                        }}
                                        onClick={() => handleColorChange(color)} // Handle color selection
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Replace the existing advice section with fetched advice */}
                        <div className="gap-4 flex flex-col border-gray-400 rounded-xl border p-4 sm:p-6 md:p-8 shadow-lg shadow-gray-300">
                            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#EE8B48]">
                                Style Advice
                            </div>
                            {styleAdvice.length > 0 ? (
                                styleAdvice.map((advice, index) => (
                                    <span key={index} className="text-sm sm:text-base md:text-lg font-semibold">
                                        {advice}
                                    </span>
                                ))
                            ) : (
                                <p>No advice available.</p>
                            )}
                        </div>
                    </div>

                    <div className="flex basis-full lg:basis-1/3 flex-col border rounded-lg border-gray-400 p-6 sm:p-8 md:p-10 shadow-lg shadow-gray-300 justify-center items-center h-full">
                    {/* <ManSvg colorMap={colorMap} onPathClick={handlePathClick} /> */}
                    {/* <ManSvg2 colorMap={colorMap} onPathClick={handlePathClick} /> */}
                    {/* <ManSvg3 colorMap={colorMap} onPathClick={handlePathClick}/> */}

                    {/* <GirlSvg colorMap={colorMap} onPathClick={handlePathClick} /> */}
                    <GirlSvg2 colorMap={colorMap} onPathClick={handlePathClick}/>
                    {/* <GirlSvg3 colorMap={colorMap} onPathClick={handlePathClick}/> */}
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default YourModel;
