import { Link } from "react-router-dom"
import "../App.css"
export default function SignUp() {
    return (
        <>
            {/* Begin: Sign Up */}
            <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#EEE6E6]">
                <div className="min-w-full min-h-full flex flex-col justify-center items-center md:flex-row">
                    <div className="w-full md:w-2/5 xl:w-1/2 flex justify-center">
                        <Link to='/home' className="text-[#EE8B48] max-sm:text-7xl text-8xl font-bold text-center mb-10 md:mb-0">Fit Me</Link>
                    </div>

                    <div className="flex min-h-full">
                        <div className="w-full h-[80vh] md:w-[30rem] min-md-h-[90vh] bg-[#1D1B1B] py-3 px-10 rounded-2xl flex flex-col items-center justify-center">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="text-font text-center max-sm:text-2xl md:text-4xl font-bold leading-9 tracking-tight text-white">
                                    Sign Up 
                                </h2>
                            </div>

                            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-full flex flex-col items-center justify-center">
                                <form method="POST" className="space-y-6">
                                    <div className="flex flex-col justify-center items-center">
                                        <label htmlFor="email" className="block max-sm:text-lg font-medium leading-6 text-white text-left w-80">
                                            Email
                                        </label>

                                        <div className="mt-2 w-80">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                className="pl-3 block w-80 h-12 rounded-lg border-0 py-1.5 text-blavk shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                                placeholder="example@gmail.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center items-center">
                                        <div>
                                            <label htmlFor="password" className="block max-sm:text-lg font-medium leading-6 text-white w-80">
                                                Create a Password
                                            </label>
                                        </div>

                                        <div className="mt-2 w-80">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                className="pl-3 block w-80 h-12 rounded-lg border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EE8B30] sm:text-sm sm:leading-6"
                                                placeholder="Must Be 8 Characters"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center items-center">
                                        <div>
                                            <label htmlFor="password" className="block max-sm:text-lg font-medium leading-6 text-white w-80">
                                                Confirm Password
                                            </label>
                                        </div>

                                        <div className="mt-2 w-80">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                className="pl-3 block w-80 h-12 rounded-lg border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring- sm:text-sm sm:leading-6"
                                                placeholder="Repeat Password"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center items-center">
                                        <button
                                            type="submit"
                                            className="flex w-80 h-12 justify-center items-center rounded-lg bg-[#EE8B48] px-3 py-1.5 max-sm:text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[#EE8B30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </form>

                                <p className="mt-5 text-center max-sm:text-xs md:text-base text-white">
                                    Already have an account?{" "}
                                    <Link to="/signin" className="font-semibold leading-6 text-[#EE8B48] hover:text-[#EE8B30]">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End: Sign Up */}
        </>
    )
};