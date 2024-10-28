import "../App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordChanged() {
    // Variables //
    const navigate = useNavigate();
    //=== Variables ===//

    // Use Effect //
    useEffect(() => {
        // Check If User Is Logged In //
        if (localStorage.getItem("userId") !== null) {
            navigate("/");
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);  
    //=== Use Effect ===//
    
    return (
        <>
            {/* Begin: Password Changed */}
            <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#EEE6E6]">
                <div className="min-w-full min-h-full flex flex-col justify-center items-center md:flex-row md:gap-20">
                    <div className="flex min-h-full">
                        <div className="w-full h-[80vh] max-sm:h-[50vh] md:w-[30rem] max-sm:gap-10 min-md-h-[90vh] bg-[#1D1B1B] px-10 rounded-2xl flex flex-col items-center justify-center">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="text-font text-center max-sm:text-2xl md:text-4xl font-bold leading-9 tracking-tight text-white">
                                    Password Changed
                                </h2>

                                <div className="w-full flex justify-center items-center max-sm:mt-8">
                                    <p className="text-white max-sm:text- text-center w-72">
                                        Your password has been changed succesfully
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full flex flex-col items-center justify-center">
                                <form method="POST" className="space-y-6">
                                    <div className="flex flex-col justify-center items-center">
                                        <Link to="/signin">
                                        <button
                                            type="submit"
                                            className="flex w-80 h-12 justify-center items-center rounded-lg bg-[#EE8B48] px-3 py-1.5 max-sm:text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[#EE8B30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            Back To Login
                                        </button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End: Password Changed */}
        </>
    )
};