import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../App.css";
import ManSvg from "../svg-component/ManSvg";
import ManSvg2 from "../svg-component/ManSvg2";
import ManSvg3 from "../svg-component/ManSvg3";
import GirlSvg from "../svg-component/GirlSvg";
import GirlSvg2 from "../svg-component/GirlSvg2";
import GirlSvg3 from "../svg-component/GirlSvg3";

function YourModel() {
  const location = useLocation();
  const { veinColor, skinColor, gender, height, weight } = location.state || {};
  const [suggestions, setSuggestions] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modelExists, setModelExists] = useState(false);
  const [colorMap, setColorMap] = useState({
    1: "gray",
    2: skinColor.code,
    3: "gray",
    4: "gray",
    5: "gray",
    6: "gray",
    7: "gray",
    8: "gray",
    9: "gray",
    10: "gray",
  });
  const [selectedPath, setSelectedPath] = useState(null);
  const [styleAdvice, setStyleAdvice] = useState([]);
  const userId = localStorage.getItem("userId");

  // Function to check if user model exists
  const checkModelExists = () => {
    axios
      .get(`http://localhost:5050/models/userModel/${userId}`)
      .then((response) => {
        setModelExists(response.data.exists);
      })
      .catch((error) => console.error("Error checking model existence:", error));
  };

  // Function to post user model data if model doesn't exist
  const fetchingData = () => {
    if (modelExists) return;

    axios
      .post(
        "http://localhost:5050/models/userModel",
        {
          userId: userId,
          gender: gender,
          veinsColor: veinColor,
          weight: weight,
          height: height,
          skinColor: skinColor,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log("Data created:", response.data);
        setModelExists(true);
      })
      .catch((error) => {
        console.error("Error creating data:", error);
      });
  };

  useEffect(() => {
    if (userId) {
      checkModelExists();
    }
  }, [userId]);

  useEffect(() => {
    if (!modelExists) {
      fetchingData();
    }
  }, [modelExists]);

  useEffect(() => {
    fetchColorSuggestions();
    fetchStyleAdvice();
  }, []);

  const fetchColorSuggestions = () => {
    setLoading(true);
    setError("");

    const userData = {
      veinColor: veinColor,
      skinColor: skinColor,
      gender: gender,
    };

    axios
      .post("http://localhost:5050/api/chatgpt-suggest-colors", userData)
      .then((response) => {
        const colorData = response.data.suggestions;
        const parsedColorData = JSON.parse(colorData);
        setSuggestions(parsedColorData);
        console.log("userData", userData);
      })
      .catch((error) => {
        console.error(
          "Error fetching color suggestions:",
          error.response ? error.response.data : error.message
        );
        setError("Failed to fetch color suggestions. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchStyleAdvice = () => {
    setLoading(true);

    setError("");
    const userData = {
      weight: weight,
      height: height,
    };

    axios
      .post("http://localhost:5050/api/chatgpt-style-advice", userData)
      .then((response) => {
        setStyleAdvice(response.data.advice.split("\n"));
      })
      .catch((error) => {
        console.error(
          "Error fetching style advice:",
          error.response ? error.response.data : error.message
        );
        setError("Failed to fetch style advice. Please try again.");
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

  const handleCalculateBMI = () => {
    const BMI = weight / (height / 100) ** 2;
    return BMI;
  };

  const BMIValue = handleCalculateBMI();

  return (
    <div className="flex flex-1 flex-col gap-4 sm:gap-6 overflow-y-visible bg-[#EEE6E6]">
      <Header profile="true" />

      <div className="flex flex-1 flex-col gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="text-4xl font-extrabold text-[#EE8B48]">Your Model</div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="flex basis-full lg:basis-2/3 flex-col gap-6 sm:gap-8">
            <div className="gap-4 flex flex-col border-gray-400 rounded-xl border p-4 sm:p-6 md:p-8 shadow-lg shadow-gray-300">
              {["Click on clothing to change color", "Choose your color"].map(
                (step, i, arr) => (
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
                    <span className="text-base sm:text-lg font-bold">
                      {step}
                    </span>
                  </div>
                )
              )}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 border-gray-400 rounded-xl border p-4 shadow-lg shadow-gray-300 gap-4 items-center justify-center">
              {loading && <p>Loading...</p>}
              {error && <p>{error}</p>}
              {Object.entries(suggestions)
                .slice(0, 15)
                .map(([key, color]) => (
                  <div className="flex justify-center items-center" key={key}>
                    <span
                      className="rounded-full w-10 h-10 border-2 border-black cursor-pointer"
                      style={{
                        backgroundColor: color,
                      }}
                      onClick={() => handleColorChange(color)}
                    />
                  </div>
                ))}
            </div>

            <div className="gap-4 flex flex-col border-gray-400 rounded-xl border p-4 sm:p-6 md:p-8 shadow-lg shadow-gray-300">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#EE8B48]">
                Style Advice
              </div>
              {styleAdvice.length > 0 ? (
                styleAdvice.map((advice, index) => (
                  <span
                    key={index}
                    className="text-sm sm:text-base md:text-lg font-semibold"
                  >
                    {advice}
                  </span>
                ))
              ) : (
                <p>No advice available.</p>
              )}
            </div>
          </div>

          <div className="flex basis-full lg:basis-1/3 flex-col border rounded-lg border-gray-400 p-6 sm:p-8 md:p-10 shadow-lg shadow-gray-300 justify-center items-center h-full">
            {gender === "Male" ? (
              BMIValue < 18.5 ? (
                <ManSvg3
                  colorMap={colorMap}
                  onPathClick={handlePathClick}
                  skinColor={skinColor.code}
                />
              ) : BMIValue >= 18.5 && BMIValue < 24.9 ? (
                <>
                <ManSvg
                  colorMap={colorMap}
                  onPathClick={handlePathClick}
                  skinColor={skinColor.code}
                />
               {console.log(skinColor.code)}
               </>
                
               
              ) : (
                <ManSvg2
                  colorMap={colorMap}
                  onPathClick={handlePathClick}
                  skinColor={skinColor.code}
                />
              )
              
            ) : BMIValue < 18.5 ? (
              <GirlSvg3
                colorMap={colorMap}
                onPathClick={handlePathClick}
                skinColor={skinColor}
              />
            ) : BMIValue >= 18.5 && BMIValue < 24.9 ? (
              <GirlSvg
                colorMap={colorMap}
                onPathClick={handlePathClick}
                skinColor={skinColor}
              />
            ) : (
              <GirlSvg2
                colorMap={colorMap}
                onPathClick={handlePathClick}
                skinColor={skinColor}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourModel;
