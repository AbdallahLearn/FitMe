import Logo from "../assets/fitmerm.png";
import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <>
            {/* Begin: Sign In */}
            <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#EEE6E6]">
                <div className="min-w-full min-h-full flex flex-col justify-center items-center md:flex-row">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            alt="Your Company"
                            src={Logo}
                            className="w-96"
                        />
                    </div>

                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-full md:w-1/2">
                        <div className="w-full md:w-fit bg-[#1D1B1B] py-12 p-20 rounded-2xl">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                                    Sign In 
                                </h2>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                className="pl-3 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                            Password
                                            </label>
                                        </div>

                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                className="pl-3 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>

                                        <div className="text-sm mt-2">
                                            <Link to="/resetpassword" className="font-semibold text-white">
                                                Forgot password?
                                            </Link>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-[#EE8B48] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#EE8B30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>

                                <p className="mt-10 text-center text-sm text-gray-500">
                                    Not a member?{' '}
                                    <Link to="/signup" className="font-semibold leading-6 text-[#EE8B48] hover:text-[#EE8B30]">
                                        Start a 10 day free trial
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End: Sign In */}
        </>
    )
};