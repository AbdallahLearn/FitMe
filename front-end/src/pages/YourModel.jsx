import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Header from "../component/Header";
import "../App.css";
import { renderToStaticMarkup } from "react-dom/server";
import ManSvg from "../svg-component/ManSvg";
import ManSvg2 from "../svg-component/ManSvg2";
import ManSvg3 from "../svg-component/ManSvg3";
import GirlSvg from "../svg-component/GirlSvg";
import GirlSvg2 from "../svg-component/GirlSvg2";
import GirlSvg3 from "../svg-component/GirlSvg3";
import { useNavigate } from "react-router-dom";
function YourModel() {
  const location = useLocation();
  const { veinColor, skinColor, gender, height, weight } = location.state || {};
  const [suggestions, setSuggestions] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modelExists, setModelExists] = useState(false);
  const [newModelExists, setNewModelExists] = useState("");
  const [colorMap, setColorMap] = useState({
    1: "gray",
    2: skinColor?.code,
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
  const navigate = useNavigate();
  const checkModelExists = () => {
    axios
      .get(`https://fitme-4pk3.onrender.com/models/userModel/${userId}`)
      .then((response) => {
        setModelExists(response.data.exists);
        setNewModelExists(response.data.generatedModel);
        const newSkinColorCode = response.data.skinColor.code;
        setColorMap((prevColorMap) => ({
          ...prevColorMap,
          2: newSkinColorCode,
        }));
        // console.log("newmode ", response.data.generatedModel)
      })
      .catch((error) =>
        console.error("Error checking model existence:", error)
      );
  };

  useEffect(() => {
    if (!userId && !modelExists) {
      navigate("/");
    } else {
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
      .post("https://fitme-4pk3.onrender.com/api/chatgpt-suggest-colors", userData)
      .then((response) => {
        const colorData = response.data.suggestions;
        const parsedColorData = JSON.parse(colorData);
        const colorValues = Object.values(parsedColorData);
        setSuggestions(parsedColorData);
        // console.log("Color suggestions:", colorValues);
        fetchingData(colorValues);
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

  let svgString = "";
  const fetchingData = (sugg) => {
    if (modelExists) return;

    if (gender === "Male") {
      svgString =
        BMIValue < 18.5
          ? renderToStaticMarkup(
              <ManSvg3 colorMap={colorMap}  />
            )
          : BMIValue < 24.9
          ? renderToStaticMarkup(
              <ManSvg colorMap={colorMap}  />
            )
          : renderToStaticMarkup(
              <ManSvg2 colorMap={colorMap}  />
            );
    } else {
      svgString =
        BMIValue < 18.5
          ? renderToStaticMarkup(
              <GirlSvg2 colorMap={colorMap}  />
            )
          : BMIValue < 24.9
          ? renderToStaticMarkup(
              <GirlSvg colorMap={colorMap}  />
            )
          : renderToStaticMarkup(
              <GirlSvg3 colorMap={colorMap}  />
            );
    }

    // Log suitable colors array
    // console.log("Suitable colors array:", sugg);

    // Check if sugg is an array and has at least one color
    if (!Array.isArray(sugg) || sugg.length === 0) {
      // console.error("Suitable colors array is empty or not an array.");
      return; // Exit if no colors are available
    }

    axios
      .post(
        "https://fitme-4pk3.onrender.com/models/userModel",
        {
          userId: userId,
          gender: gender,
          veinsColor: veinColor,
          weight: weight,
          height: height,
          skinColor: skinColor,
          generatedModel: svgString,
          suitableColors: sugg,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log("Data created successfully in DB:", response.data);
        setModelExists(true);
      })
      .catch((error) => {
        console.error("Error creating data:", error.message);
      });
  };

  const fetchStyleAdvice = () => {
    setLoading(true);

    setError("");
    const userData = {
      weight: weight,
      height: height,
      gender: gender,
    };

    axios
      .post("https://fitme-4pk3.onrender.com/api/chatgpt-style-advice", userData)
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

  const generatedModel = (() => {
    if (gender === "Male") {
      if (BMIValue < 18.5)
        return (
          <ManSvg3
            colorMap={colorMap}
            onPathClick={handlePathClick}
            
          />
        );
      else if (BMIValue >= 18.5 && BMIValue < 24.9)
        return (
          <ManSvg
            colorMap={colorMap}
            onPathClick={handlePathClick}
            skinColor={skinColor.code}
          />
        );
      else
        return (
          <ManSvg2
            colorMap={colorMap}
            onPathClick={handlePathClick}
            
          />
        );
    } else {
      if (BMIValue < 18.5)
        return (
          <GirlSvg2
            colorMap={colorMap}
            onPathClick={handlePathClick}
            
          />
        );
      else if (BMIValue >= 18.5 && BMIValue < 24.9)
        return (
          <GirlSvg
            colorMap={colorMap}
            onPathClick={handlePathClick}
            
          />
        );
      else
        return (
          <GirlSvg3
            colorMap={colorMap}
            onPathClick={handlePathClick}
            
          />
        );
    }
  })();
  

  function updateSvg() {
    // Generate the SVG string based on gender and BMIValue
    let svgString = "";
    if (gender === "Male") {
      svgString =
        BMIValue < 18.5
          ? renderToStaticMarkup(
              <ManSvg3 colorMap={colorMap}  />
            )
          : BMIValue < 24.9
          ? renderToStaticMarkup(
              <ManSvg colorMap={colorMap}  />
            )
          : renderToStaticMarkup(
              <ManSvg2 colorMap={colorMap}  />
            );
    } else {
      svgString =
        BMIValue < 18.5
          ? renderToStaticMarkup(
              <GirlSvg2 colorMap={colorMap}  />
            )
          : BMIValue < 24.9
          ? renderToStaticMarkup(
              <GirlSvg colorMap={colorMap}  />
            )
          : renderToStaticMarkup(
              <GirlSvg3 colorMap={colorMap}  />
            );
    }

    // Update user's generatedModel field in the database
    // console.log("Object.entries(suggestions)", Object.values(suggestions));
    axios
      .put(
        `https://fitme-4pk3.onrender.com/models/userModel/${userId}`, // Use PATCH method and include userId in URL
        {
          generatedModel: svgString, // Send the generated SVG string to update
          suitableColors: Object.values(suggestions),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log("Model updated successfully:", response.data);
        setModelExists(true); // Update state if necessary
        setNewModelExists(svgString);

        setTimeout(() => {
          navigate("/user-profile");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error updating model:", error.message);
      });
  }

  return (
    <div className="flex flex-1 flex-col gap-4 sm:gap-6 overflow-y-visible bg-[#EEE6E6]">
      <Header />

      <div className="flex flex-1 justify-between flex-col gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 ">
        <div className="text-4xl font-extrabold text-[#EE8B48] ">
          Your Model
        </div>

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
            <div className="flex basis-full overflow-hidden lg:basis-1/3 flex-col lg:hidden border rounded-lg border-gray-400 p-6 sm:p-8 md:p-10 shadow-lg shadow-gray-300 justify-center items-center h-full">
              {modelExists ? (
                <div dangerouslySetInnerHTML={{ __html: newModelExists }} />
              ) : (
                <>
                  {generatedModel}
                  <button
                    className="btn hover:text-black border-none bg-[#EE8B48] text-white font-bold text-lg px-10"
                    onClick={updateSvg}
                  >
                    Save
                  </button>
                </>
              )}
            </div>
            <div className="gap-4 flex lg:h-[26rem]  lg:overflow-auto flex-col border-gray-400 rounded-xl border p-4 sm:p-6 md:p-8 shadow-lg shadow-gray-300">
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

        
          <div className="hidden basis-full overflow-hidden lg:basis flex-col border rounded-lg border-gray-400 p-6 lg:flex sm:p-8 md:p-10 shadow-lg shadow-gray-300 justify-center items-center h-full">
            {modelExists ? (
              <div dangerouslySetInnerHTML={{ __html: newModelExists }} />
            ) : (
              <>
                {generatedModel}
                <button
                  className="btn hover:text-black border-none bg-[#EE8B48] text-white font-bold text-lg px-10"
                  onClick={updateSvg}
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourModel;
