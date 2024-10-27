import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import FitMeLP from "../../public/images/FitMeLP.png";
import man from "../../public/images/man.png";
import circleWords from "../../public/images/circleWords.png";
import manImage from "../../public/images/manImage.png";
import clothes from "../../public/images/clothes.jpg";
import FeaturesBox from "../component/FeaturesBox";
import WorkStepsBox from "../component/WorkStepsBox";
import dashedLine from "../../public/images/dashedLine.png";
import "../App.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ManSvg from "../svg-component/ManSvg";
import ImageSlider from "./ImageSlider";
function LandingPage() {
  const [text] = useTypewriter({
    words: ["it"],
    loop: 1,
    typeSpeed: 300,
    deleteSpeed: 50,
    // delaySpeed: 1000,
  });
  const [text2] = useTypewriter({
    words: ["e"],
    loop: 1,
    typeSpeed: 300,
    deleteSpeed: 50,
    // delaySpeed: 1000
  });

  const [text6] = useTypewriter({
    words: ["ET’S GET STARTED"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
    // delaySpeed: 1000,
  });
  return (
    <div className="min-h-screen flex flex-col">
      <Header blackHeader="true" />
      <div className="flex-grow flex flex-col justify-center items-center gap-5">
        <motion.div className="relative w-full bg-[#1D1B1B] text-white text-center pb-20 max-sm:pb-3">
          <hr className="border-white" />
          <div className="flex justify-center items-center gap-56 ">
            <p className="flex items-center text-[22rem] title-font gap-60 font-bold max-sm:text-[7rem] max-sm:gap-20">
              F{text}
              <span
                className="text-black outline-white text-[23rem] title-font font-bold max-sm:text-[7rem] pl-4"
                style={{ WebkitTextStroke: "1px White" }}
              >
                M{text2}
              </span>
            </p>
          </div>

          {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:w-[26rem] md:w-[20rem] max-md:w-[18rem] max-sm:w-[11rem] ">
            <img src={man} />
          </div> */}
          <div>
            <ImageSlider />
        </div>

          
          <div className="flex justify-between items-center lg:px-16 -mt-10 max-sm:mt-0">
            <div className="flex flex-col w-60 items-start gap-3 ml-12 lg:-mt-20 max-sm:w-24 max-md:w-44 max-sm:ml-3 max-sm:justify-end">
              <p className="text-left text-xl font-bold text-[#cccbcb] max-sm:text-[0.55rem]">
                Tired of choosing colors that don't fit quite right?
              </p>
              <Link
                to= {localStorage.getItem("userId") === null ? "/signin" : "/generate-model" }
                className="py-2 font-bold rounded-md bg-[#EE8B48] text-[1.08rem] w-48 max-sm:w-20 max-md:w-44 max-sm:text-[0.5rem] border-none text-white"
              >
                L{text6}
              </Link>
            </div>
            <div className="relative">
              <img src={circleWords} className="w-36 max-sm:w-20" />
              <img
                src={manImage}
                className="absolute top-10 -left-6 w-32 max-sm:w-16"
              />
            </div>
          </div>
        </motion.div>

        <div id="aboutSection" className="w-full px-10 pt-12 pb-20 flex flex-col lg:flex-row lg:justify-evenly lg:items-start justify-center items-center gap-10">
          <div className="flex flex-col gap-5 lg:w-[50%] md:w-[70%] pt-28 max-sm:pt-0 max-sm:w-full justify-center items-center text-center lg:text-left">
            <h1 className="title-font text-[#EE8B48] font-abril text-7xl max-sm:text-4xl w-[82%] max-sm:w-[90%]">
              Who We Are?
            </h1>
            <p className="text-[#1D1B1B] font-medium text-xl w-[82%]">
              FitMe Team helps you find your perfect colors by creating a
              personalized model based on your skin tone and measurements,
              making shopping a vibrant style journey.
            </p>
          </div>
          <div className="relative w-[33%] flex flex-col justify-center items-start max-sm:w-[60%]">
            <img src={clothes} className="w-96 z-10" />
            <div className="bg-[#685547] w-52 h-32 absolute -bottom-8 -left-8"></div>
          </div>
        </div>

        <div className="w-full bg-[#EEE6E6] py-28 flex flex-col justify-evenly items-center gap-24">
          <h1 className="title-font text-[#EE8B48] text-7xl text-center max-sm:text-4xl">
            All-in-one platform
          </h1>
          <motion.div
            initial={{ opacity: 0, translateY: "-100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2 }}
            className="flex justify-center items-center gap-8 flex-wrap max-sm:flex-col"
          >
            <FeaturesBox
              icon={
                <svg
                  width="62"
                  height="62"
                  viewBox="0 0 125 127"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_68_568)">
                    <path
                      d="M11.7188 7.9375C10.6827 7.9375 9.68918 8.35563 8.95661 9.09992C8.22405 9.8442 7.8125 10.8537 7.8125 11.9062V35.7188C7.8125 36.7713 7.40095 37.7808 6.66839 38.5251C5.93582 39.2694 4.94225 39.6875 3.90625 39.6875C2.87025 39.6875 1.87668 39.2694 1.14411 38.5251C0.41155 37.7808 0 36.7713 0 35.7188V11.9062C0 8.74852 1.23465 5.72011 3.43234 3.48726C5.63003 1.2544 8.61074 0 11.7188 0L35.1562 0C36.1923 0 37.1858 0.418135 37.9184 1.16242C38.6509 1.90671 39.0625 2.91617 39.0625 3.96875C39.0625 5.02133 38.6509 6.0308 37.9184 6.77508C37.1858 7.51937 36.1923 7.9375 35.1562 7.9375H11.7188ZM85.9375 3.96875C85.9375 2.91617 86.349 1.90671 87.0816 1.16242C87.8142 0.418135 88.8077 0 89.8438 0L113.281 0C116.389 0 119.37 1.2544 121.568 3.48726C123.765 5.72011 125 8.74852 125 11.9062V35.7188C125 36.7713 124.588 37.7808 123.856 38.5251C123.123 39.2694 122.13 39.6875 121.094 39.6875C120.058 39.6875 119.064 39.2694 118.332 38.5251C117.599 37.7808 117.188 36.7713 117.188 35.7188V11.9062C117.188 10.8537 116.776 9.8442 116.043 9.09992C115.311 8.35563 114.317 7.9375 113.281 7.9375H89.8438C88.8077 7.9375 87.8142 7.51937 87.0816 6.77508C86.349 6.0308 85.9375 5.02133 85.9375 3.96875ZM3.90625 87.3125C4.94225 87.3125 5.93582 87.7306 6.66839 88.4749C7.40095 89.2192 7.8125 90.2287 7.8125 91.2812V115.094C7.8125 116.146 8.22405 117.156 8.95661 117.9C9.68918 118.644 10.6827 119.062 11.7188 119.062H35.1562C36.1923 119.062 37.1858 119.481 37.9184 120.225C38.6509 120.969 39.0625 121.979 39.0625 123.031C39.0625 124.084 38.6509 125.093 37.9184 125.838C37.1858 126.582 36.1923 127 35.1562 127H11.7188C8.61074 127 5.63003 125.746 3.43234 123.513C1.23465 121.28 0 118.251 0 115.094L0 91.2812C0 90.2287 0.41155 89.2192 1.14411 88.4749C1.87668 87.7306 2.87025 87.3125 3.90625 87.3125ZM121.094 87.3125C122.13 87.3125 123.123 87.7306 123.856 88.4749C124.588 89.2192 125 90.2287 125 91.2812V115.094C125 118.251 123.765 121.28 121.568 123.513C119.37 125.746 116.389 127 113.281 127H89.8438C88.8077 127 87.8142 126.582 87.0816 125.838C86.349 125.093 85.9375 124.084 85.9375 123.031C85.9375 121.979 86.349 120.969 87.0816 120.225C87.8142 119.481 88.8077 119.062 89.8438 119.062H113.281C114.317 119.062 115.311 118.644 116.043 117.9C116.776 117.156 117.188 116.146 117.188 115.094V91.2812C117.188 90.2287 117.599 89.2192 118.332 88.4749C119.064 87.7306 120.058 87.3125 121.094 87.3125Z"
                      fill="black"
                    />
                    <path
                      d="M23.4375 111.125C23.4375 111.125 15.625 111.125 15.625 103.188C15.625 95.25 23.4375 71.4375 62.5 71.4375C101.562 71.4375 109.375 95.25 109.375 103.188C109.375 111.125 101.562 111.125 101.562 111.125H23.4375ZM85.9375 39.6875C85.9375 46.003 83.4682 52.0598 79.0728 56.5255C74.6774 60.9912 68.716 63.5 62.5 63.5C56.284 63.5 50.3226 60.9912 45.9272 56.5255C41.5318 52.0598 39.0625 46.003 39.0625 39.6875C39.0625 33.372 41.5318 27.3152 45.9272 22.8495C50.3226 18.3838 56.284 15.875 62.5 15.875C68.716 15.875 74.6774 18.3838 79.0728 22.8495C83.4682 27.3152 85.9375 33.372 85.9375 39.6875Z"
                      fill="#1D1B1B"
                      fill-opacity="0.83"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_68_568">
                      <rect width="125" height="127" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              text="Generate your personalized model"
            />
            <FeaturesBox
              icon={
                <svg
                  width="62"
                  height="62"
                  viewBox="0 0 96 123"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M91.2 0C92.473 0 93.6939 0.404965 94.5941 1.12581C95.4943 1.84665 96 2.82432 96 3.84375V119.156C96 120.176 95.4943 121.153 94.5941 121.874C93.6939 122.595 92.473 123 91.2 123H72C70.727 123 69.5061 122.595 68.6059 121.874C67.7057 121.153 67.2 120.176 67.2 119.156V3.84375C67.2 2.82432 67.7057 1.84665 68.6059 1.12581C69.5061 0.404965 70.727 0 72 0H91.2ZM43.2 0C44.473 0 45.6939 0.404965 46.5941 1.12581C47.4943 1.84665 48 2.82432 48 3.84375V119.156C48 120.176 47.4943 121.153 46.5941 121.874C45.6939 122.595 44.473 123 43.2 123H33.6C32.327 123 31.1061 122.595 30.2059 121.874C29.3057 121.153 28.8 120.176 28.8 119.156V3.84375C28.8 2.82432 29.3057 1.84665 30.2059 1.12581C31.1061 0.404965 32.327 0 33.6 0H43.2ZM4.8 0C6.07304 0 7.29394 0.404965 8.19411 1.12581C9.09429 1.84665 9.6 2.82432 9.6 3.84375V119.156C9.6 120.176 9.09429 121.153 8.19411 121.874C7.29394 122.595 6.07304 123 4.8 123C3.52695 123 2.30606 122.595 1.40588 121.874C0.505707 121.153 0 120.176 0 119.156V3.84375C0 2.82432 0.505707 1.84665 1.40588 1.12581C2.30606 0.404965 3.52695 0 4.8 0Z"
                    fill="#1D1B1B"
                    fill-opacity="0.83"
                  />
                </svg>
              }
              text="Personalized to your exact measurements"
            />
            <FeaturesBox
              icon={
                <svg
                  width="62"
                  height="62"
                  viewBox="0 0 121 123"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_68_563)">
                    <path
                      d="M121 61.5C121 77.8108 114.626 93.4536 103.28 104.987C91.934 116.521 76.5456 123 60.5 123C44.4544 123 29.066 116.521 17.72 104.987C6.37409 93.4536 0 77.8108 0 61.5C0 45.1892 6.37409 29.5464 17.72 18.0129C29.066 6.47945 44.4544 0 60.5 0C76.5456 0 91.934 6.47945 103.28 18.0129C114.626 29.5464 121 45.1892 121 61.5ZM90.9769 38.2069C90.4367 37.6597 89.7935 37.2288 89.0857 36.9401C88.378 36.6514 87.6202 36.5107 86.8578 36.5265C86.0953 36.5423 85.3438 36.7142 84.6482 37.032C83.9526 37.3498 83.3272 37.8069 82.8094 38.376L56.5448 72.3932L40.7165 56.2956C39.6413 55.2771 38.2192 54.7227 36.7498 54.749C35.2804 54.7754 33.8784 55.3805 32.8392 56.4368C31.8 57.4932 31.2048 58.9184 31.1789 60.412C31.1529 61.9057 31.6984 63.3513 32.7002 64.4443L52.7106 84.7931C53.2497 85.3401 53.8916 85.7711 54.5981 86.0604C55.3046 86.3498 56.0612 86.4915 56.8227 86.4771C57.5842 86.4628 58.3351 86.2927 59.0306 85.9769C59.726 85.6612 60.3518 85.2063 60.8706 84.6394L91.0601 46.2788C92.0893 45.191 92.6578 43.7363 92.6437 42.2271C92.6296 40.7179 92.0338 39.2745 90.9844 38.2069H90.9769Z"
                      fill="#1D1B1B"
                      fill-opacity="0.83"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_68_563">
                      <rect width="121" height="123" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              text="Get the colors that are suitable for your skin tone"
            />
          </motion.div>
        </div>

        <div className="w-full py-32 max-sm:py-10 flex flex-col justify-evenly items-center gap-28 max-sm:gap-12">
          <h1 className="title-font text-[#EE8B48] text-7xl text-center max-sm:text-4xl">
            How FitMe works?
          </h1>
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-[80%] px-5 flex justify-center items-start max-sm:flex-col max-sm:items-center max-sm:gap-16"
          >
            <WorkStepsBox
              step="1"
              title="Color"
              desc="choose your skin color"
            />
            <img
              src={dashedLine}
              className="w-20 md:w-32 md:pt-6 rotate-90 sm:rotate-0 "
            />
            <WorkStepsBox
              step="2"
              title="Measurement"
              desc="Enter your height and body width"
            />
            <img
              src={dashedLine}
              className="w-20 md:w-32 md:pt-6 rotate-90 sm:rotate-0"
            />
            <WorkStepsBox
              step="3"
              title="Model Creation"
              desc="Generate a personalized model based on your inputs"
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
