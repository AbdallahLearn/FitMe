import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { z } from "zod";
import axios from "axios";

export default function SignUp() {
  // Variables //
  const navigate = useNavigate();
  //=== Variables ===//

  // Use State Variables //
  const [fullname, setFullName] = useState("");
  const [nameErr, setNameErr] = useState("");

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [userErr, setUserErr] = useState("");
  //== Use State Variables ==//

  // Use Effect //
  useEffect(() => {
    // Check If User Is Logged In //
    if (localStorage.getItem("userId") !== null) {
      navigate("/");
    }
    //== Check If User Is Logged In ==//
  }, []);
  //=== Use Effect ===//

  // Sign Up Function //
  const schema = z.object({
    fullname: z
      .string()
      .min(4, { message: "Name Should Be More Than 3 Characters." })
      .regex(/^[A-Za-z\u0600-\u06FF ]+$/, {
        message: "Name should only contain Arabic or English letters.",
      }),
    email: z.string().email({ message: "Please Enter a Valid Email Address." }),
    password: z
      .string()
      .min(8, { message: "Password Must Be at Least 8 Characters Long." })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/, {
        message:
          "Password Must Include Uppercase, Lowercase, a Number, and a Special Character.",
      }),
  });

  const signUp = () => {
    const validationResult = schema.safeParse({ fullname, email, password });

    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      const { path, message } = firstError;

      if (path[0] === "fullname") {
        setNameErr(message);
        setTimeout(() => setNameErr(""), 3000);
      } else if (path[0] === "email") {
        setEmailErr(message);
        setTimeout(() => setEmailErr(""), 3000);
      } else if (path[0] === "password") {
        setPasswordErr(message);
        setTimeout(() => setPasswordErr(""), 3000);
      }
    } else {
      axios
        .post("https://fitme-4pk3.onrender.com/users/signup", {
          name: fullname,
          email: email,
          password: password,
        })
        .then(() => {
          navigate("/signin");
        })
        .catch((error) => {
          console.log("Error response:", error.response);

          if (error.response && error.response.data) {
            const errorMessage = error.response.data.message;

            if (errorMessage === "User already exists") {
              setUserErr("User Already Exists.");
              setTimeout(() => setUserErr(""), 3000);
            }
          } else {
            console.error("Unknown error:", error);
          }
        });
    }
  };

  // Display //
  let displayNameErr = "none";
  let displayEmErr = "none";
  let displayPassErr = "none";
  let displayUserErr = "none";

  if (nameErr != "") {
    displayNameErr = "block";
  }

  if (emailErr != "") {
    displayEmErr = "block";
  }

  if (passwordErr != "") {
    displayPassErr = "block";
  }

  if (userErr != "") {
    displayUserErr = "block";
  }

  //=== Display ===//

  return (
    <>
      {/* Begin: Sign Up */}
      <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#EEE6E6]">
        <div className="min-w-full min-h-full flex flex-col justify-center items-center md:flex-row md:gap-20">
          <div className="flex justify-center w-[30%] md:mr-10">
            <Link
              to="/"
              className="text-[#EE8B48] title-font text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[13rem] text-center mb-10 md:mb-0"
            >
              FitMe
            </Link>
          </div>

          <div className="flex min-h-full">
            <div className="w-full md:w-[30rem] bg-[#1D1B1B] py-12 px-10 my-5 rounded-2xl flex flex-col items-center justify-center">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-font text-center max-sm:text-2xl md:text-4xl font-bold leading-9 tracking-tight text-white">
                  Sign Up
                </h2>
              </div>

              <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-full flex flex-col items-center justify-center">
                <span
                  style={{ display: displayUserErr }}
                  className="text-red-600 text-sm text-center w-72 rounded-md mb-2 p-1"
                >
                  {userErr}
                </span>

                <div className="space-y-6">
                  <div className="flex flex-col justify-center items-center">
                    <label
                      htmlFor="name"
                      className="block max-sm:text-lg font-medium leading-6 text-white text-left w-80"
                    >
                      Name
                    </label>

                    <div className="mt-2 w-80">
                      <input
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                        value={fullname}
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="text"
                        className="pl-3 block w-80 h-12 rounded-lg border-0 py-1.5 text-blavk shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="Enter Your Name"
                      />
                    </div>

                    <span
                      style={{ display: displayNameErr }}
                      className="text-red-600 text-sm text-center w-72 rounded-md mt-1 p-1"
                    >
                      {nameErr}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <label
                      htmlFor="email"
                      className="block max-sm:text-lg font-medium leading-6 text-white text-left w-80"
                    >
                      Email
                    </label>

                    <div className="mt-2 w-80">
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        value={email}
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="pl-3 block w-80 h-12 rounded-lg border-0 py-1.5 text-blavk shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="example@gmail.com"
                      />
                    </div>

                    <span
                      style={{ display: displayEmErr }}
                      className="text-red-600 text-sm text-center w-72 rounded-md mt-1 p-1"
                    >
                      {emailErr}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <label
                        htmlFor="password"
                        className="block max-sm:text-lg font-medium leading-6 text-white w-80"
                      >
                        Create a Password
                      </label>
                    </div>

                    <div className="mt-2 w-80">
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        value={password}
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="pl-3 block w-80 h-12 rounded-lg border-0 py-1.5 text-blavk shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="Must Be 8 Characters"
                      />
                    </div>

                    <span
                      style={{ display: displayPassErr }}
                      className="text-red-600 text-sm text-center w-72 rounded-md mt-1 p-1"
                    >
                      {passwordErr}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <button
                      onClick={signUp}
                      type="submit"
                      className="flex w-80 h-12 justify-center items-center rounded-lg bg-[#EE8B48] px-3 py-1.5 max-sm:text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[#EE8B30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>

                <p className="mt-5 text-center max-sm:text-xs md:text-base text-white">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="font-semibold leading-6 text-[#EE8B48] hover:text-[#EE8B30]"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
