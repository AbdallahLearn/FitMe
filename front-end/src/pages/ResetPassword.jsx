import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { z } from 'zod';

export default function ResetPassword() {
    // State variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
    const [userErr, setUserErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

        // Use Effect //
        useEffect(() => {
            // Check If User Is Logged In //
            if (localStorage.getItem("userId") !== null) {
                navigate("/");
            };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);  

    const navigate = useNavigate();

    // Schema validation using zod
    const schema = z.object({
        email: z
            .string()
            .email({ message: "Please Enter a Valid Email Address." }),
        password: z
            .string()
            .min(8, { message: "Password Must Be at Least 8 Characters Long." })
            .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/, {
                message: "Password Must Include Uppercase, Lowercase, a Number, and a Special Character."
            }),
        confirmPassword: z
            .string()
            .min(8, { message: "Confirm Password Must Match Password." })
    });

    // Reset password function
    const resetPassword = () => {
        const validationResult = schema.safeParse({ email, password, confirmPassword });

        if (!validationResult.success) {
            const firstError = validationResult.error.errors[0];
            const { path, message } = firstError;

            if (path[0] === "email") {
                setEmailErr(message);
                setTimeout(() => setEmailErr(""), 3000);
            } else if (path[0] === "password") {
                setPasswordErr(message);
                setTimeout(() => setPasswordErr(""), 3000);
            } else if (path[0] === "confirmPassword") {
                setConfirmPasswordErr("Passwords Do Not Match.");
                setTimeout(() => setConfirmPasswordErr(""), 3000);
            }
        } else if (password !== confirmPassword) {
            setConfirmPasswordErr("Passwords Do Not Match.");
            setTimeout(() => setConfirmPasswordErr(""), 3000);
        } else {
            // Send request to reset password
            axios.post('http://localhost:4000/users/reset-password', {
                email: email,
                newPassword: password,
            })
            .then((response) => {
                const result = response.data;
                console.log('Response From Server:', result);

                if (result) {
                    setSuccessMsg("Password Reset Successful! Redirecting to sign in...");
                    setTimeout(() => navigate("/signin"), 3000);
                } else {
                    setUserErr("Failed to Reset Password. Please Try Again.");
                    setTimeout(() => setUserErr(""), 3000);
                }
            })
            .catch((error) => {
                console.error('Error During Password Reset:', error.response ? error.response.data : error.message);
                setUserErr("Invalid Email or Unable to Reset Password.");
                setTimeout(() => setUserErr(""), 3000);
            });
        }
    };
    
    // Display //
    let displayEmErr = "none";
    let displayPassErr = "none";
    let displayConfPassErr = "none";
    let displayUserErr = "none";
    let displayMsg = "none";

    if (setEmailErr != "") {
        displayEmErr = "block";
    };

    if (setPasswordErr != "") {
        displayPassErr = "block";
    };

    if (setConfirmPasswordErr != "") {
        displayConfPassErr = "block";
    };

    if (userErr != "") {
        displayUserErr = "block";
    };

    if (successMsg != "") {
        displayMsg = "block";
    };
    //=== Display ===//


    return (
        <>
            {/* Begin: Reset Password */}
            <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#EEE6E6]">
                <div className="min-w-full min-h-full flex flex-col justify-center items-center md:flex-row md:gap-20">
                    <div className="flex min-h-full">
                        <div className="w-full md:w-[30rem] bg-[#1D1B1B] p-10 rounded-2xl flex flex-col items-center justify-center gap-5">
                            <div className="flex justify-start items-center w-full">
                                <Link to="/signin">
                                    <div className="w-fit p-1 border-2 border-white rounded-xl">
                                        <i className="fa-solid fa-chevron-left fa-fw text-white text-xl"></i>
                                    </div>
                                </Link>
                            </div>

                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="text-font text-center max-sm:text-2xl md:text-4xl font-bold leading-9 tracking-tight text-white -mt-10">
                                    Reset Password 
                                </h2>
                                <div className="w-full flex justify-center items-center">
                                    <p className="text-white max-sm:text- text-center w-72">
                                        Please type something you’ll remember
                                    </p>
                                </div>
                            </div>

                            {/* Error or Success Messages */}
                            <span style={{"display": displayUserErr}} className="text-red-600 text-sm text-center w-72 rounded-md mb-2 p-1">
                                {userErr}
                            </span>
                            <span style={{"display": displayMsg}} className="text-green-600 text-sm text-center w-72 rounded-md mb-2 p-1">
                                {successMsg}
                            </span>

                            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-full flex flex-col items-center justify-center">
                                <div className="space-y-6">
                                    <div className="flex flex-col justify-center items-center">
                                        <label htmlFor="email" className="block max-sm:text-lg font-medium leading-6 text-white text-left w-80">
                                            Email address
                                        </label>
                                        <div className="mt-2 w-80">
                                            <input
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                className="pl-3 block w-80 h-12 rounded-lg border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring- sm:text-sm sm:leading-6"
                                                placeholder="Enter Your Email"
                                            />
                                            <span style={{"display": displayEmErr}} className="text-red-600 text-sm text-center w-72 rounded-md mt-1 p-1">
                                                {emailErr}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center items-center">
                                        <div>
                                            <label htmlFor="password" className="block max-sm:text-lg font-medium leading-6 text-white text-left w-80">
                                                New Password
                                            </label>
                                        </div>
                                        <div className="mt-2 w-80">
                                            <input
                                                onChange={(e) => setPassword(e.target.value)}
                                                value={password}
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                className="pl-3 block w-80 h-12 rounded-lg border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring- sm:text-sm sm:leading-6"
                                                placeholder="Must Be 8 Characters"
                                            />
                                            <span style={{"display": displayPassErr}} className="text-red-600 text-sm text-center w-72 rounded-md mt-1 p-1">
                                                {passwordErr}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center items-center">
                                        <div>
                                            <label htmlFor="confirmPassword" className="block max-sm:text-lg font-medium leading-6 text-white text-left w-80">
                                                Confirm New Password
                                            </label>
                                        </div>
                                        <div className="mt-2 w-80">
                                            <input
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                value={confirmPassword}
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type="password"
                                                required
                                                className="pl-3 block w-80 h-12 rounded-lg border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring- sm:text-sm sm:leading-6"
                                                placeholder="Repeat Password"
                                            />
                                            <span style={{"display": displayConfPassErr}} className="text-red-600 text-sm text-center w-72 rounded-md mt-1 p-1">
                                                {confirmPasswordErr}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center items-center">
                                        <button
                                            onClick={resetPassword}
                                            type="submit"
                                            className="flex w-80 h-12 justify-center items-center rounded-lg bg-[#EE8B48] px-3 py-1.5 max-sm:text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[#EE8B30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            Reset Password
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End: Reset Password */}
        </>
    );
}